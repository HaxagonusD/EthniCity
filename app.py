from flask import Flask, request, jsonify
from prompt import returning_main
import requests
import json
import openai
import asyncio
import db
import constants
from pathlib import Path

RESUME_DATA_KEY = "resume_data"

app = Flask(__name__,
            static_folder='./build',
            static_url_path='/')


@app.route('/')
def index():
        return app.send_static_file('index.html')


@app.route("/test", methods=['POST'])
def test():
    resume_string = str(request.data, 'utf-8')
    print("Resume data: ", resume_string)
    output = openai.Completion.create(engine="davinci",
                                      prompt=resume_string,
                                      temperature=0.3,
                                      max_tokens=60,
                                      top_p=1.0,
                                      frequency_penalty=0.0,
                                      presence_penalty=0.0)
    print("Summary: ", output)
    return "Connected to the data base!"


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
        json_response = format_response_success_retrieval(resp)
    except Exception as e:
        print("Error when retrieving data from mongodb resume collection", str(e))
        json_response = {"ERROR": str(e)}

    return jsonify(json_response)


def format_response_success_retrieval(response):
    json_response = {"ids": []}
    for _id in response:
        json_response["ids"].append(_id["name"])
    print("json_response", json_response)
    return json_response


@app.route("/api/v2/resume", methods=['POST'])
def add_resume_data():
    raw_resume_data = json.loads(request.args.get(RESUME_DATA_KEY))
    formatted_resume_data = format_data_for_insertion(raw_resume_data)
    try:
        resp = db.resumeCollection.insert_one(formatted_resume_data)
        json_response = {"inserted_id": str(resp.inserted_id)}
        return jsonify(json_response)
    except Exception as e:
        print("Error when inserting resume data into mongodb resume collection: ", str(e))
        json_response = {"ERROR": str(e)}
        return jsonify(json_response), 400


@app.route("/api/v2/jobs/all", methods=['GET'])
def get_all_jobs_data():
    try:
        resp = db.jobsCollection.find({})
        write_to_csv_file(resp, constants.CHARTS_CSV_FILENAME)
        json_response = {"SUCCESS": "Written user data to csv file"}
        return jsonify(json_response)
    except Exception as e:
        print("Error when retrieving job data from job collection: ", str(e))
        json_response = {"ERROR": str(e)}
        return jsonify(json_response), 400


def write_to_csv_file(response, output_csv_filename):
    formatted_user_data = format_data_for_csv_file(response)
    output_full_path = constants.DATA_DIR + '/' + output_csv_filename
    output_csv_exists = Path(output_full_path).is_file()
    if output_csv_exists:
        # Append to it
        with open(output_full_path, 'a') as outf:
            outf.writelines(formatted_user_data)
            outf.write('\n')
    else:
        # Create it and write to it
        with open(output_full_path, 'w') as outf:
            header = ','.join(constants.JOBS_CSV_COLUMNS)
            outf.write(header + '\n')
            outf.writelines(formatted_user_data)
            outf.write('\n')


def format_data_for_csv_file(user_data):
    keys = constants.JOBS_CSV_COLUMNS
    formatted_data = []
    for row in user_data:
        line = ''
        for key in keys:
            if key in row:
                line += str(row[key]) + ','
            else:
                line += ','
        line_wo_newline = line[:-1].replace("'\n'", '')
        formatted_data.append(line_wo_newline + '\n')
    return formatted_data


@app.route("/api/v2/user", methods=['POST'])
def add_user():
    pass


@app.route("/api/v2/user", methods=['GET'])
def get_user():
    pass


def format_data_for_insertion(parsed_resume_json):
    # @TODO: Add more logic if required
    return parsed_resume_json


if __name__ == '__main__':
    app.run(port=5000)