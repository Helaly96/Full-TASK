# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-07 19:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ASURT', '0003_auto_20171007_1927'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicants',
            name='profilepic',
            field=models.FileField(null=True, upload_to=b''),
        ),
    ]
