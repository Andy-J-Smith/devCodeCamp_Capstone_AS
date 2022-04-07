
from django.db import models

class Subscription(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    quantity = models.IntegerField(default=0)
   