# Generated by Django 4.0.3 on 2022-04-12 17:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('subscriptions', '0003_subscription_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subscription',
            name='slug',
        ),
    ]