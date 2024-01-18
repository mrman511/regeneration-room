from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from users.models import CustomUser
from users.serializers import CustomUserSerializer
from email_templates import welcome_template


import pprint
pprint = pprint.PrettyPrinter(indent=4).pprint

# Create your views here.
@api_view(['GET'])
def end_points(request):
  context={
    'end_points': {
      'GET': 'api/',
    },
  }
  return Response(context)

@api_view(['GET', 'POST'])
def users(request):
  if request.method == 'POST':
    newUser = request.data.dict()
    email = newUser['email']
    first_name=newUser['first_name']
    last_name=newUser['last_name']
    notifications = True if newUser['notifications'] == 'true' else False
    # send conflict response if email is already registered
    if CustomUser.objects.filter(email=email):
      context = { 'detail': 'An account with the provided email already exists.' }
      return Response(context, status.HTTP_409_CONFLICT)
    # create new user
    user = CustomUser.objects.create_user(
      email,
      newUser['password'],
    )
    user.first_name=first_name
    user.last_name=last_name
    user.notifications=notifications
    user.save()

    # send email after user is created
    send_mail(
      welcome_template.subject,
      welcome_template.message,
      settings.EMAIL_HOST_USER,
      [user.email],
      fail_silently=False
    )
    # return successful message
    context = { 'detail': f'Successfully Registered { first_name }!' }
    return Response(context, status.HTTP_201_CREATED)

  # return all users as json response
  users = CustomUser.objects.all();
  serializer = CustomUserSerializer(users, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def reset_password(request):
  data = request.data.dict()
  if data['email']:
    send_mail('reset password', 'resetPassword for email', settings.EMAIL_HOST_USER, [data['email']], fail_silently=False)


  return Response({}, status.HTTP_200_OK)