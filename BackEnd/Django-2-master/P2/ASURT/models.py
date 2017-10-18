# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.core.urlresolvers import reverse
from django.db import models
from django import forms


class Applicants(models.Model):

   name=models.CharField(max_length=100)
   email=models.EmailField(max_length=100,null=True)
   mobile = models.CharField(max_length=12)
   national_id=models.CharField(max_length=14)
   faculty=models.CharField(max_length=100)
   major=models.CharField(max_length=100)
   minor=models.CharField(max_length=100)
   expected_year=models.CharField(max_length=4)
   university=models.CharField(max_length=100)
   profilepic=models.FileField(null=True)

   def __str__(self):
       return (self.name)












