from django.urls import path, include
from customers import views

urlpatterns = [
    path('<int:pk>/', views.customer_profile),
    path('all/', views.get_all_customers),
]