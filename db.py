from flask_pymongo import pymongo


CONNECTION_STRING = "mongodb+srv://Clariza_Mayo:Foreve6434!@cluster0.y9k04.mongodb.net/<ValtechSocialImpactHackathon>?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
#  db = client.get_database('flask_mongodb_atlas')
#  user_collection = pymongo.collection.Collection(db, 'user_collection')

mydb = client["mydatabase"]
userCollection = mydb["users"]
