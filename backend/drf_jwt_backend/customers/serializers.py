from .models import Customer
from rest_framework import serializers

class CustomerSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Customer
        fields = ['id', 'user', 'first_name', 'last_name', 'country', 'street_address', 'apartment', 'city', 'state', 'zip_code', 'phone', 'email_address' ]
        depth = 1