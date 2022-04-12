

from django.db import models
from django.contrib.auth.models import User

class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    subscription_type = models.CharField(max_length=255)
    price = models.IntegerField(default=25)
    stripe_plan_id = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.subscription_type
   