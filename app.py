from flask import Flask, request, jsonify
# from prompt import returning_main
import requests
import json
import openai
import asyncio
import db

RESUME_DATA_KEY = "resume_data"

app = Flask(__name__,
            static_folder='./build',
            static_url_path='/')


@app.route('/')
def index():
        return app.send_static_file('index.html')


"""
@app.route("/test", methods=['POST'])
def test():
    json_file = request.data
    new_string = str(request.data, 'utf-8')
    print(new_string)
    summary = returning_main(new_string)
    print(summary)
    print((summary), "hello")
    return "Connected to the data base!"
"""


@app.route("/users", methods=['GET'])
def sendingreqtdata():
    everything = db.userCollection.find()
    print(everything)
    
    output = []
    for s in everything:
        output.append({'resume': s['resume'], 'summary': s['summary']})

    return jsonify({'result': output})


@app.route("/api/v2/resume/all", methods=['GET'])
def get_all_resume_data():
    try:
        resp = db.resumeCollection.find({})
        print("Resp: ", resp)
        json_response = format_response_sucess_retreival(resp)
    except Exception as e:
        print("Error when retrieving data from mongodb resume collection", str(e))
        json_response = {"ERROR": str(e)}

    return jsonify(json_response)


def format_response_sucess_retreival(response):
    json_response = {"ids": []}
    for _id in response:
        json_response["ids"].append(_id["name"])
    print("json_response", json_response)
    return json_response


@app.route("/api/v2/resume", methods=['POST'])
def add_resume_data():
    raw_resume_data = json.loads(request.args.get(RESUME_DATA_KEY))
    formatted_resume_data = format_data_for_insertion(raw_resume_data)
    resp = {}
    try:
        resp = db.resumeCollection.insert_one(formatted_resume_data)
        json_response = {"inserted_id": str(resp.inserted_id)}
    except Exception as e:
        print("Error when inserting resume data into mongodb resume collection: ", str(e))
        json_response = {"ERROR": str(e)}
    return jsonify(json_response)


@app.route("/api/v2/user", methods=['POST'])
def add_user():
    pass


@app.route("/api/v2/user", methods=['GET'])
def get_user():
    pass


@app.route("/api/v2/user/all", methods=['GET'])
def get_all_users():
    pass


def format_data_for_insertion(parsed_resume_json):
    # @TODO: Add more logic if required
    return parsed_resume_json


if __name__ == '__main__':
    app.run(port=5000)
