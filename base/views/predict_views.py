from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer, OrderSerializer

from rest_framework import status
from datetime import datetime
import csv
import pandas as pd

    
    
@api_view(['GET', 'POST', 'DELETE'])
def getPredict(request):
    if request.method == 'GET':
        df = pd.read_csv('static/data_set/quikr_car.csv')
        carName = df['name'].unique()
        carCompany = df['company']
        carYear = df['year']
        carKms_driven = df['kms_driven']
        carFuel_type = df['fuel_type']
        return Response(carName)
        
    if request.method == 'POST':
        data = request.data
        data = data['datas']
        b_name = data['car_name']
        print(b_name)
        return Response(10101)    
