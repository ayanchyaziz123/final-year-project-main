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
        df = pd.read_csv('static/data_set/laptop_data.csv')
        company = df['Company'].unique()
        typeName = df['TypeName'].unique()
        inches = df['Inches'].unique();
        sr = df['ScreenResolution'].unique()
        cpu = df['Cpu'].unique();
        ram = df['Ram'].unique();
        gpu = df['Gpu'].unique()
        ops = df['OpSys'].unique()
        memory = df['Memory'].unique()
        weight = df['Weight'].unique()
        return Response({'lc': company, 'ltn': typeName, 'lsr': sr, 'lcpu': cpu,
        'lram': ram, 'lgpu': gpu, 'lops': ops, 'lmr': memory, 'lw': weight, 'li': inches})

    if request.method == 'POST':
        data = request.data
        data = data['datas']
        b_name = data['lep_name']
        print(b_name)
        return Response(10101)   

