from flask import Flask, request
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

if __name__ == '__main__':
    app.run(port=5000)
