from flask import Flask, request, jsonify
from prompt import returning_main
import requests
import json
import openai
import asyncio
from flask_pymongo import PyMongo
from flask import jsonify
import db

app = Flask(__name__,static_folder='./build', static_url_path='/')

@app.route('/')
def index():
        return app.send_static_file('index.html')

@app.route("/test", methods=['POST'])
def test():
    json_file = request.data
    new_string = str(request.data, 'utf-8')
    print(new_string)
    summary = returning_main(new_string)
    print(summary)
    print((summary), "hello")
    return "Connected to the data base!"

@app.route("/users", methods=['GET'])
def sendingreqtdata():
    everything = db.userCollection.find()
    print(everything)
    
    output = []
    for s in  everything:
        output.append({'resume' : s['resume'], 'summary' : s['summary']})

    return jsonify({'result' : output})

@app.route("/api/v2/resume", methods=['POST'])
def add_resume_data():
    raw_resume_data = request.resume_data
    # Parse resume data from the request
    raw_resume_data = parse_resume_data()
    # Open a connection to db
    # Format data appropriately for db insertion
    formatted_resume_data = format_data_for_insertion()
    # Insert into db, include try-catch
    try:
        resp = insert_resume_data(formatted_resume_data)
    except Exception as e:
        resp = handle_insertion_error(e)
    # Return success/error codes as appropriate + add information for front-end
    #   to process
    return jsonify(resp)



if __name__ == '__main__':
    app.run(port=5000)
