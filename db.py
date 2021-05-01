# from flask_pymongo import pymongo
import pymongo
import json
import constants

# CONNECTION_STRING = "mongodb+srv://Clariza_Mayo:Foreve6434!@cluster0.y9k04.mongodb.net/<ValtechSocialImpactHackathon>?retryWrites=true&w=majority"

mongo_client = pymongo.MongoClient(constants.CONNECTION_STRING, connect=True)


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
    dummy_data_fullpath = constants.DATA_DIR + '/' + dummy_data_filename
    with open(dummy_data_fullpath) as data_f:
        dummy_data = json.load(data_f)
    resp = collection_handler.insert_one(dummy_data[0])
    return resp.inserted_id


def delete_all_documents_from_collection(collection_handler):
    try:
        resp = collection_handler.delete_many({})
        print(f"Deleted all documents from {collection_handler}")
    except Exception as e:
        print("Failed to delete all documents from collection")



_db = mongo_client[constants.DATABASE]
userCollection = _db[constants.USER_COLLECTION]
resumeCollection = _db[constants.RESUME_COLLECTION]
jobsCollection = _db[constants.JOBS_COLLECTION]
testCollection = _db[constants.TEST_COLLECTION]

user_collection_exists = check_if_collection_exists(mongo_client,
                                                    constants.DATABASE,
                                                    constants.USER_COLLECTION)

if not user_collection_exists:
    inserted_ids = insert_dummy_data_into_collection('dummy_test_data.json',
                                                     userCollection)
    print(f"Ids of inserted documents into {constants.USER_COLLECTION}: {inserted_ids}")

resume_collection_exists = check_if_collection_exists(mongo_client,
                                                      constants.DATABASE,
                                                      constants.RESUME_COLLECTION)
if not resume_collection_exists:
    inserted_ids = insert_dummy_data_into_collection('dummy_test_data.json',
                                                     resumeCollection)
    print(f"Ids of inserted documents into {constants.RESUME_COLLECTION}: {inserted_ids}")

# delete_all_documents_from_collection(jobsCollection)
# inserted_ids = insert_dummy_data_into_collection('dummy_jobs_data.json',
#                                                  jobsCollection)
# print(f"Ids of inserted documents into {constants.JOBS_COLLECTION}: {inserted_ids}")

# inserted_ids = insert_dummy_data_into_collection('dummy_jobs_data.json',
#                                                  jobsCollection)
# print(f"Ids of inserted documents into {constants.JOBS_COLLECTION}: {inserted_ids}")

# Testing
# list_all_databases(mongo_client)
# list_all_collections(mongo_client, DATABASE)
