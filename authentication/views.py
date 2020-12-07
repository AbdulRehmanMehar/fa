from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def login(request):
    return Response(data="Hey", status=status.HTTP_200_OK)