from __future__ import unicode_literals
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Applicants
from .serializers import ApplicantSerializer

from django.shortcuts import render


class ApplicantList(APIView):
    def get(self,request):
        applicants = Applicants.objects.all()
        serializer = ApplicantSerializer(applicants,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ApplicantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

