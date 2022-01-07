import pandas
from sklearn import linear_model
from datetime import datetime


def history_model(user_date, user_product_id):
   import datetime as dt
    
   d = ['2016-01-15', '2017-01-15', '2018-01-15', '2019-01-15']
   p = [10, 20, 30, 40]


   data = {'date': d,
           'price': p}

   df = pandas.DataFrame.from_dict(data)

   df['date'] = pandas.to_datetime(df['date'])
   df['date'] = df['date'].map(dt.datetime.toordinal)
   print(df['date'])

   X = df[['date']]
   y = df[['price']]

   regr = linear_model.LinearRegression()
   regr.fit(X, y)

   date_str = '2019-01-15'
   ate_object = datetime.strptime(date_str, '%Y-%m-%d').date()

   #print('Date:', date_time_obj.date())
   #print('Time:', date_time_obj.time())
   #print('Date-time:', date_time_obj)
   dt = ate_object.toordinal()


   predictedCO2 = regr.predict([[dt]])

   print(predictedCO2)
