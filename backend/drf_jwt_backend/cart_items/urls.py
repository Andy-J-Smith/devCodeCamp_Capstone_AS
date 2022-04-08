from django.urls import path, include
from cart_items import views

urlpatterns = [
    path('', views.get_all_items),
    # path('all/', views.get_all_customers),
    # path('<int:pk>/', views.customer_modify),
]