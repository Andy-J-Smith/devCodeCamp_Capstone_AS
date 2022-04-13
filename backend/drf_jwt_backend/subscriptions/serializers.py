from .models import Subscription
from rest_framework import serializers
from django.contrib.auth.models import User




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']

class SubscriptionSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta: 
        model = Subscription
        fields = ['id','user','subscription_type', 'price', 'stripe_plan_id' ]
        depth = 1