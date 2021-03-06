# Generated by Django 4.0.3 on 2022-04-08 00:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customer_cart', '0001_initial'),
        ('cart_items', '0001_initial'),
        ('subscriptions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart_item',
            name='customer_cart_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer_cart.cart'),
        ),
        migrations.AddField(
            model_name='cart_item',
            name='subscription_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='subscriptions.subscription'),
        ),
    ]
