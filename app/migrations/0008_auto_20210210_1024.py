# Generated by Django 3.1.5 on 2021-02-10 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20210210_1023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='age',
            field=models.IntegerField(null=True, verbose_name='年龄'),
        ),
    ]