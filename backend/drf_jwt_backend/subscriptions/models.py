
from django.db import models

class Subscription(models.Model):
    slug = models.SlugField(max_length=255)
    subscription_type = models.CharField(max_length=255)
    price = models.IntegerField(default=25)
    stripe_plan_id = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.subscription_type
   