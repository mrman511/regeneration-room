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
    first_name=newUser['first_name']
    last_name=newUser['last_name']
    notifications = True if newUser['notifications'] == 'true' else False
    user = CustomUser.objects.create_user(
      newUser['email'],
      newUser['password'],
    )
    user.first_name=first_name
    user.last_name=last_name
    user.notifications=notifications
    user.save()
    context = { 'message': f'Successfully Registered { first_name }!' }
    return Response(context, status.HTTP_201_CREATED)


  users = CustomUser.objects.all();
  serializer = CustomUserSerializer(users, many=True)
  return Response(serializer.data)