from pickle import TRUE
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
  def create_user(self, email, password=None):
    if not email:
      raise ValueError('Users must have an email address')

    user = self.model(
      email=self.normalize_email(email),
    )

    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, email, password):
    user = self.create_user(
      email=email,
      password=password,
    )
    user.is_admin = True
    user.save(using=self._db)
    return user

class CustomUser(AbstractBaseUser):
  email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  notifications=models.BooleanField(default=True)

  objects = CustomUserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []

  def __str__(self):
    return self.email

  def has_perm(self, perm, obj=None):
    return True

  def has_module_perms(self, app_label):
    return True

  @property
  def is_staff(self):
    return self.is_admin

# class Profile(models.Model):
#   user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
#   notifications = models.BooleanField(default=True)


  # def __str__(self):
  #   return f'{self.user.first_name} {self.user.last_name}'
