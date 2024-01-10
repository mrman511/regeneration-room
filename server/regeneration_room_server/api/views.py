from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from users.models import CustomUser
from users.serializers import CustomUserSerializer

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
    # check if user with email exists if true return conflict error
    user_exists = CustomUser.objects.filter(email=email)
    if user_exists:
      context = { 'detail': 'An account with the provided email already exists.' }
      return Response(context, status.HTTP_409_CONFLICT)

    user = CustomUser.objects.create_user(
      email,
      newUser['password'],
    )
    user.first_name=first_name
    user.last_name=last_name
    user.notifications=notifications
    user.save()
    context = { 'detail': f'Successfully Registered { first_name }!' }
    return Response(context, status.HTTP_201_CREATED)


  users = CustomUser.objects.all();
  serializer = CustomUserSerializer(users, many=True)
  return Response(serializer.data)