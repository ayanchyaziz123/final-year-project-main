import http.client
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.serializers import ProductSerializer, UserProfileSerilizer, UserSerializer, UserSerializerWithToken
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status
from base.models import  UserProfile
from django.db.models import Sum
import random
import http.client
from django.conf import settings

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def send_otp(mobile, otp):
    print("FUNCTION CALLED")
    conn = http.client.HTTPSConnection("api.msg91.com")
    authkey = settings.AUTH_KEY
    headers = {'content-type': "application/json"}
    url = "http://control.msg91.com/api/sendotp.php?otp="+otp+"&message=" + \
        "Your otp is "+otp + "&mobile="+mobile+"&authkey="+authkey+"&country=91"
    conn.request("GET", url, headers=headers)
    res = conn.getresponse()
    data = res.read()
    print("Otp works : ",data)
    return None


@api_view(['GET'])
def getUserCoins(request, pk):
    print("user  :: ", pk)
    coins = list(UserProfile.objects.filter(
        user_id=pk).aggregate(Sum('coins')).values())[0]
    print("coins : ->>>>>>", coins)
    return Response(coins)


@api_view(['POST'])
def registerUser(request):
    data = request.data
    print("data ::: ", data)

        #for otp
    otp = str(random.randint(1000, 9999))
    mobile = data['mobile']
    email = data['email']
    check_user = User.objects.filter(email=email).first()
    check_profile = UserProfile.objects.filter(mobile=mobile).first()
        
    if(check_profile):
        message = {'detail': 'User with this mobile already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    elif(check_user):
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
        
        #for user 
    user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
    )
        
        #for otp user
        
    profile = UserProfile(user=user, mobile=mobile, otp=otp)
    profile.save()
    send_otp(mobile, otp)
    request.session['mobile'] = mobile
    
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)

        


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')
