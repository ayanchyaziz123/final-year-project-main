# Generated by Django 3.1.4 on 2021-11-26 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_auto_20211125_2321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='ram_memory',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
