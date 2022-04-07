from django.urls import path
from surveys import views

urlpatterns = [
    path('', views.get_all_surveys),
    # path('all/', views.get_all_customers),
    # path('<int:pk>/', views.customer_modify),
]