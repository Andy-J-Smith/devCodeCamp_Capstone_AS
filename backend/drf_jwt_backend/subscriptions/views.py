from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

from .models import Subscription
from .serializers import SubscriptionSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_subscriptions(request):
    subscriptions = Subscription.objects.all()
    serializers = SubscriptionSerializer(subscriptions, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def subscription_profile(request):
    print(
        'User ', f"{request.user.id} {request.user.email}{request.user.username}")    
    if request.method == "POST":
        serializer = SubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['PUT', 'DELETE'])        
@permission_classes([IsAuthenticated])
def subscription_modify(request, pk):
    subscription = get_object_or_404(Subscription, pk=pk)       
    if request.method == 'PUT':
        serializer = SubscriptionSerializer(subscription, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        subscription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    