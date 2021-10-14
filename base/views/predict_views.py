from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer, OrderSerializer

from rest_framework import status
from datetime import datetime


@api_view(['GET', 'POST', 'DELETE'])
def getPredict(request):
    if request.method == 'GET':
        data = 101010
        return Response(data)
    if request.method == 'POST':
        data = request.data
        data = data['datas']
        b_name = data['brand_name']
        print(b_name)
        return Response(10101)    
