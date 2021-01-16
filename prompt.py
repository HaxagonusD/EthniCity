from chronological import main, read_prompt, gather, fetch_max_search_doc,cleaned_completion
import db
from flask import jsonify

def resume_manager(new_string):
    async def logic():
        block = await cleaned_completion(f"I'm trying to summarize resumes\n###\nHere is an example of a resume\n###\n{new_string}\n###\nSummarize this resume to one sentence", engine="davinci-instruct-beta", temperature=0.44, top_p=1)
        db.userCollection.insert_one({"resume":jsonify( new_string ),"summary":block})
    return logic

def returning_main(new_string):
    main(resume_manager(new_string))
