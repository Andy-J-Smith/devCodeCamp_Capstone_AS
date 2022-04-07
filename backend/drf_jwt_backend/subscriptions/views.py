from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

from backend.drf_jwt_backend.surveys import serializers
from .models import Subscription
from .serializers import SubscriptionSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_subscriptions(request):
    subscriptions = Subscription.objects.all()
    serializers = SubscriptionSerializer(subscriptions, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)


    