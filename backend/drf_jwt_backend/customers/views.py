from http.client import OK
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Customer
from .serializers import CustomerSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_customers(request):
    customers = Customer.objects.all()
    serializer = CustomerSerializer(customers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def customer_profile(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email}{request.user.username}")
    if request.method == "POST":
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        customer = get_object_or_404(Customer, pk=pk)
        serializer = CustomerSerializer(Customer)
        return Response(serializer.data)
