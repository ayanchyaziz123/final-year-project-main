from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.

class SubUser(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    coins = models.IntegerField(null=True, blank=True, default=0)
    filtering_history = models.CharField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    
    
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    processor = models.CharField(max_length=200, null=True, blank=True)
    display = models.CharField(max_length=200, null=True, blank=True)
    graphics_card = models.CharField(max_length=200, null=True, blank=True)
    ram_memory = models.IntegerField(null=True, blank=True, default=0)
    storage = models.CharField(max_length=200, null=True, blank=True)
    operating_system = models.CharField(max_length=200, null=True, blank=True)
    web_cam = models.CharField(max_length=200, null=True, blank=True)
    weight = models.CharField(max_length=200, null=True, blank=True)
    color = models.CharField(max_length=200, null=True, blank=True)
    battery =  models.CharField(max_length=200, null=True, blank=True)
    warranty = models.CharField(max_length=200, null=True, blank=True)
    
    
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    
    image2 = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    image3 = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    
    
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=13, decimal_places=3, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    is_offer = models.BooleanField(default=False, null=True, blank=True)
    offer_percentage = models.IntegerField(
        default=0, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=13, decimal_places=3, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=13, decimal_places=3, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=13, decimal_places=3, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=13, decimal_places=3, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
class Coupon(models.Model):
    coupon_code = models.CharField(primary_key=True, max_length=200)
    discount_amount = models.FloatField()
    discount_type = models.CharField(max_length=200)
    expiration_date = models.DateTimeField(auto_now=False, auto_now_add=False)
        

class CouponRedemption(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    coupon_code = models.ForeignKey(
        Coupon, on_delete=models.SET_NULL, null=True)
    total_discount = models.FloatField()
    redemption_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    is_used = models.BooleanField(default=False)
    status = models.BooleanField(default=False)

    

class Contact(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    area_code = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    need_contact = models.BooleanField(default=False)
    contact_media = models.CharField(max_length=20)
    message = models.CharField(max_length=800)
    
    
