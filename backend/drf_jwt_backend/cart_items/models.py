from django.db import models
from customer_cart.models import Cart
from subscriptions.models import Subscription




class Cart_item(models.Model):
    customer_cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    subscription_id = models.ForeignKey(Subscription, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)

