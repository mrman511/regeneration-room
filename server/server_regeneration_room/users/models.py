from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
  notifications = models.BooleanField(default=True)


  def __str__(self):
    return f'{self.user.first_name} {self.user.last_name}'
