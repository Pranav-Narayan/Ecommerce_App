from django.db import models
from datetime import datetime, timedelta
import uuid

class UserModel:
    def __init__(self,name,email,password):
        self.name = name 
        self.email = email 
        self.password = password 
        self.is_verified = False
        self.verification_token = str(uuid.uuid4())
        self.created_at = datetime.now().isoformat()

    def to_dict(self):
        return{
            "name":self.name,
            "email":self.email,
            "password":self.password,
            'is_verified': self.is_verified,
            'verification_token': self.verification_token,
            'created_at': self.created_at
        }