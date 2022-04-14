
from .models import Customer
from rest_framework import serializers




class CustomerSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Customer
        fields = ['id', 'user', 'country', 'street_address', 'apartment', 'city', 'st', 'zip_code', 'phone']
        depth = 1


