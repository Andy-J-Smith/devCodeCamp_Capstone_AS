from django.urls import path
from subscriptions import views

urlpatterns = [
    path('', views.get_all_subscriptions),
    # path('<int:pk>/', views.delete_survey),
    # path('new/', views.new_survey),
]