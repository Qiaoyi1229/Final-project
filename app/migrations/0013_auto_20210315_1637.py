# Generated by Django 3.1.5 on 2021-03-15 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_auto_20210210_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='mobile',
            field=models.CharField(max_length=15, null=True, unique=True, verbose_name='手机'),
        ),
    ]
