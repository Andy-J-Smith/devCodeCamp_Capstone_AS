from .models import Survey
from rest_framework import serializers

class SurveySerializer(serializers.ModelSerializer):

    class Meta: 
        model = Survey
        fields = ['id', 'user', 'species', 'style', 'frequency', 'water_type', 'boat_land']
        depth = 1