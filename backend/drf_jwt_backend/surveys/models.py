
from django.db import models
from django.contrib.auth.models import User


class Survey(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    species = models.CharField(max_length=255)
    style = models.CharField(max_length=255)
    frequency = models.CharField(max_length=255, blank=True)
    water_type = models.CharField(max_length=255)
    boat_land = models.CharField(max_length=255)

