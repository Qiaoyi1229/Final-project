# Generated by Django 3.1.5 on 2021-03-20 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20210315_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zufang',
            name='price',
            field=models.CharField(max_length=20, verbose_name='价格'),
        ),
        migrations.AlterField(
            model_name='zufang',
            name='size',
            field=models.CharField(max_length=20, verbose_name='房屋大小'),
        ),
    ]