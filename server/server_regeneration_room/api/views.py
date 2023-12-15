from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def end_points(request):
  context={
    'end_points': {
      'GET': 'api/',
    },
  }

  return Response(context)