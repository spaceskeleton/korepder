# Generated by Django 2.2.19 on 2021-04-27 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0047_profile_punkty'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='punkty',
            field=models.CharField(max_length=7),
        ),
    ]
