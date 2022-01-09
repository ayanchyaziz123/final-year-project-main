import random
import smtplib

def send_otp(user_email, otp_code):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('aaziz9642@gmail.com', 'jinrawtnwtivxlxm')
    msg = 'Hello, your otp is '+ str(otp_code)
    server.sendmail('aaziz9642@gmail.com', user_email, msg) 
    server.quit()
    
