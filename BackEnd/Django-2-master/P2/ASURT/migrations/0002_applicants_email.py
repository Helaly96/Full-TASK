# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-07 19:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ASURT', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicants',
            name='email',
            field=models.EmailField(max_length=100, null=True),
        ),
    ]
