from django.urls import path
from surveys import views

urlpatterns = [
    path('', views.get_all_surveys),
    path('<int:pk>/', views.delete_survey),
    path('new/', views.new_survey),
]