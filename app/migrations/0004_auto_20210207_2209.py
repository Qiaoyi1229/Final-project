# Generated by Django 3.1.5 on 2021-02-07 14:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ['c_time']},
        ),
    ]