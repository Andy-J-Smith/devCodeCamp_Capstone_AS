from django.urls import path, include
from customers import views

urlpatterns = [
    path('', views.customer_profile),
    path('all/', views.get_all_customers),
]