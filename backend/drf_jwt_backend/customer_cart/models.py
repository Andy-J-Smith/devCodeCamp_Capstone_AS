from django.db import models
from customers.models import Customer
# from django.contrib.auth.models import Customer




class Cart(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)

