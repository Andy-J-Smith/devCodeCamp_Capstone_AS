from .models import Subscription
from rest_framework import serializers

class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Subscription
        fields = ['id', 'user', 'slug', 'subscription_type', 'price', 'stripe_plan_id']
        depth = 1