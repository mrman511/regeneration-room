# Generated by Django 5.0 on 2023-12-18 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_customuser_notifications'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='notifications',
            field=models.BooleanField(default=True),
        ),
    ]
