from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Survey
from .serializers import SurveySerializer



@api_view(['GET'])
@permission_classes([AllowAny])         #^ May change to IsAuthenticated
def get_all_surveys(request):
    surveys = Survey.objects.all()
    serializer = SurveySerializer(surveys, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)