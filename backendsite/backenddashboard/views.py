from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
import pymongo
connect_string = 'mongodb://localhost:27017/'

from django.conf import settings
my_client = pymongo.MongoClient(connect_string)

# First define the database name
dbname = my_client['black-coffer-database']

# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname['sector_data']
#count_documents = collection_name.count()
#print(count_documents)
# print("hello")
# document_count = collection_name.count_documents({})
# sector_details=collection_name.find({})
# for r in sector_details:
#     print(r,"\n")





# Create your views here.
def home(request):
   return JsonResponse({
      "healthCheck": True
   })

def fetchDashboardData(request):
    print("request", request)
    res = []
    sector_details=collection_name.find({}, {"_id": 0})
    for sector_detail in sector_details:
        res+=[sector_detail]
    print("printing response",res[0])
    return JsonResponse(res, safe = False)


