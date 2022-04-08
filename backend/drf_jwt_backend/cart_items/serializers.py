from .models import Cart_item
from rest_framework import serializers

class Cart_itemSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Cart_item
        fields = ['id', 'customer_cart_id', 'subscription_id', 'quantity']
        depth = 1