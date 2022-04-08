from django.urls import path, include
from customer_cart import views

urlpatterns = [
    path('', views.get_all_carts),
    # path('all/', views.get_all_customers),
    # path('<int:pk>/', views.customer_modify),
]