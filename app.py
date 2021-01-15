from flask import Flask, request
import db
import requests
import json
#import openai

app = Flask(__name__)

@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

@app.route("/test", methods=['POST'])
def test():
    json_file = request.data
    print(json_file)
    print(type(json_file))
    new_string = str(request.data, 'utf-8')
    print(type(new_string))

    # new_string = json. dumps(request.data)
    #we will make the json into a string
    #sending the string to openai- import openai library
    #open ai will transform it - summarization ---> sent back a string (paragraph)
    #go back into request.data- add a key to it: summary: with the value as the paragraph
    #sending the final json with the summary to the database in MongoDB
    # db.db.collection.insert_one({"name": "John"})
    # print(new_string)
    return "Connected to the data base!"

@app.route("/sendinginfo", methods=['GET'])
def sendingreqtdata():
    #get info from MongoDB
    #return it to the frontend
    #display it to employers
    return "Sending info to FrontEnd!"


if __name__ == '__main__':
    app.run(port=8000)