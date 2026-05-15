from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from dbConfig.db import ConnectMongo 
from .models import UserModel
from django.contrib.auth.hashers import make_password,check_password
from services.email_service import EmailService
from django.conf import settings
import jwt
import datetime

@csrf_exempt
def Account_creation(request):
    table = ConnectMongo()
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')

            # validations 
            if not name or not email or not password:
                return JsonResponse(
                    {'error':"All fields are required"},
                    status = 400
                )
            # Check user Exist or not 
            if table.find_one({"email":email}):
                return JsonResponse(
                    {"error":"User already Exists"},
                    status = 400
                )
            # Convert password in to hash password 
            hashed_password = make_password(password)
            # Create a model 
            newUser = UserModel(name,email,hashed_password)
            # save user in to mongodb 
            table.insert_one(newUser.to_dict())

            # Build verification URL
            verification_url = f"http://localhost:5173/verify-email/{newUser.verification_token}"

            # Send verification email
            email_sent = EmailService.send_verification_email(
                user_email = email,
                user_name = name,
                verification_token = newUser.verification_token,
                verification_url = verification_url
            )

            if not email_sent:
                return JsonResponse(
                    {'error': 'Failed to send verification email'},
                    status=500
                )

            return JsonResponse(
                {'message':'User registed in mongodb',
                'email_sent': email_sent,
                "registed user": newUser.name},
                status = 200
            )
            
        except Exception as e:
            return JsonResponse(
                {'error':f'Error in Signup server -- {str(e)}'},
                status = 500
            )



@csrf_exempt
def Account_Login(request):
    table = ConnectMongo()
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            
            # validations 
            if not email or not password:
                return JsonResponse(
                    {'error':"All fields are required"},
                    status = 400
                )

            # Check user Exist or not 
            user = table.find_one({'email':email})
            if not user:
                return JsonResponse(
                    {"error":"User does not exist, create a new account"},
                    status = 400
                )

            # Check user is verified or not 
            if not user['is_verified']:
                return JsonResponse(
                    {'error':'User is not verified, please verify your email'},
                    status = 400
                )
            # Verify actual user password with loggedin user password
            if not check_password(password , user['password']):
                return JsonResponse(
                    {'error':"Invalid password"},
                    status = 400
                )
            # if user existing and password is matching then user become logged in    ***********
            
            # Generate JWT token
            payload = {
                'email': user['email'],
                'name': user['name'],
                'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=7),
                'iat': datetime.datetime.now(datetime.timezone.utc)
            }
            # use settings.SECRET_KEY if available, else a fallback or read from env
            secret = getattr(settings, 'SECRET_KEY')
            token = jwt.encode(payload, secret, algorithm='HS256')
            
            response = JsonResponse(
                {
                    "message": "User logged in Successfully", 
                    "user": {"name": user['name'], "email": user['email']}
                },
                status=200
            )
            # Set token in cookies, max_age handles expiration (7 days)
            response.set_cookie(
                key='AuthToken',
                value=token,
                max_age=7 * 24 * 60 * 60,
                path='/',
                samesite='Lax'
            )
            return response
                
            # ***********************

        except Exception as e:
            return JsonResponse(
                {'error':f'Error in Login server -- {str(e)}'},
                status = 500
            )



@csrf_exempt
def Account_verify(request):
    table = ConnectMongo()
    if request.method == 'GET':
        try:
            token = request.GET.get('token')
            print("Token on backend ==", token)
            if not token:
                return JsonResponse(
                    {'error':'Token is required'},
                    status = 400
                )
            user = table.find_one({'verification_token':token})
            # delete verification token and update is_verified to True
            table.update_one(user, {'$set':{'is_verified':True}})
            table.update_one(user, {'$unset':{'verification_token':''}})
            # Send welcome mail 
            welcome_mail = EmailService.send_welcome_email(
                user_email = user['email'],
                user_name = user['name']
            )
            if not welcome_mail:
                return JsonResponse(
                    {'error':'Failed to send welcome email'},
                    status = 500
                )
            return JsonResponse(
                {'message':'Account verified successfully'},
                status = 200
            )
        except Exception as e:
            return JsonResponse(
                {'error':f'Error in Account verification -- {str(e)}'},
                status = 500
            )

@csrf_exempt
def Account_Logout(request):
    if request.method == 'POST':
        response = JsonResponse({'message': 'Logged out successfully'}, status=200)
        response.delete_cookie('AuthToken')
        return response