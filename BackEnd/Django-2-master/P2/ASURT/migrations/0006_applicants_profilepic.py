# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-17 18:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ASURT', '0005_remove_applicants_profilepic'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicants',
            name='profilepic',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]
