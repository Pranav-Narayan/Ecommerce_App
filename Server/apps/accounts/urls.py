from django.urls import path 
from .views import Account_creation, Account_Login, Account_verify, Account_Logout

urlpatterns = [
    path('signup',Account_creation),
    path('login',Account_Login),
    path('logout',Account_Logout),
    path('verify-email',Account_verify),
]