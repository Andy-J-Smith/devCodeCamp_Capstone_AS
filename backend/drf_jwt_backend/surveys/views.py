from math import perm
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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_survey(request):
    print('User', f"{request.user.id}{request.user.email}{request.user.username}")
    if request.method == 'POST':
        serializer = SurveySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_survey(request, pk):
    survey = get_object_or_404(Survey, pk=pk)
    survey.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)