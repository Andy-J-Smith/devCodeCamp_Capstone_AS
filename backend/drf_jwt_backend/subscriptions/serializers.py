from .models import Subscription
from rest_framework import serializers

class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Subscription
        fields = ['id', 'name', 'category', 'level', 'description', 'quantity']
        depth = 1