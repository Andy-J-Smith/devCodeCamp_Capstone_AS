from django.urls import path
from subscriptions import views

urlpatterns = [
    path('all/', views.get_all_subscriptions),
    path('<int:pk>/', views.subscription_modify),
    path('', views.subscription_profile),
]