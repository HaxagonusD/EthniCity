# from flask_pymongo import pymongo
import pymongo
import json

DATA_DIR = "data"
DATABASE = "ethnicityDb"
USER_COLLECTION = "userCollection"
RESUME_COLLECTION = "resumeCollection"
JOBS_COLLECTION = "jobsCollection"
TEST_COLLECTION = "testCollection"
CONNECTION_STRING = "mongodb+srv://team10:A6u8bn4g9sYxSvfX@team10cluster.vkuqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
# CONNECTION_STRING = "mongodb+srv://Clariza_Mayo:Foreve6434!@cluster0.y9k04.mongodb.net/<ValtechSocialImpactHackathon>?retryWrites=true&w=majority"

mongo_client = pymongo.MongoClient(CONNECTION_STRING, connect=True)


def list_all_databases(client):
    print(client.list_database_names())


def check_if_database_exists(client, db_name):
    if db_name in client.list_database_names():
        print(f"Db {db_name} exists")
    else:
        print(f"Db {db_name} doesn't exist")


def list_all_collections(client, db_name):
    print(client[db_name].list_collection_names())


def check_if_collection_exists(client, db_name, collection_name):
    if collection_name in client[db_name].list_collection_names():
        print(f"Collection {collection_name} exists")
        return True
    else:
        print(f"Collection {collection_name} doesn't exist")
        return False


def insert_dummy_data_into_collection(dummy_data_filename, collection_handler):
    dummy_data_fullpath = DATA_DIR + '/' + dummy_data_filename
    with open(dummy_data_fullpath) as data_f:
        dummy_data = json.load(data_f)
    resp = collection_handler.insert_one(dummy_data[0])
    return resp.inserted_id


_db = mongo_client[DATABASE]
userCollection = _db[USER_COLLECTION]
resumeCollection = _db[RESUME_COLLECTION]
jobsCollection = _db[JOBS_COLLECTION]
testCollection = _db[TEST_COLLECTION]

user_collection_exists = check_if_collection_exists(mongo_client,
                                                    DATABASE,
                                                    USER_COLLECTION)

if not user_collection_exists:
    inserted_ids = insert_dummy_data_into_collection('dummy_test_data.json',
                                                     userCollection)
    print(f"Ids of inserted documents into {USER_COLLECTION}: {inserted_ids}")

resume_collection_exists = check_if_collection_exists(mongo_client,
                                                      DATABASE,
                                                      RESUME_COLLECTION)
if not resume_collection_exists:
    inserted_ids = insert_dummy_data_into_collection('dummy_test_data.json',
                                                     resumeCollection)
    print(f"Ids of inserted documents into {RESUME_COLLECTION}: {inserted_ids}")

jobs_collection_exists = check_if_collection_exists(mongo_client,
                                                    DATABASE,
                                                    JOBS_COLLECTION)

if not jobs_collection_exists:
    inserted_ids = insert_dummy_data_into_collection('dummy_test_data.json',
                                                     jobsCollection)
    print(f"Ids of inserted documents into {JOBS_COLLECTION}: {inserted_ids}")


# Testing
# list_all_databases(mongo_client)
# list_all_collections(mongo_client, DATABASE)
