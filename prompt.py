from chronological import main, read_prompt, gather, fetch_max_search_doc,cleaned_completion
import db
from flask import jsonify

def resume_manager(new_string):
    async def logic():
<<<<<<< HEAD
        block = await cleaned_completion(f"I'm trying to summarize resumes\n###\nHere is an example of a resume\n###\n{new_string}\n###\nSummarize this resume to one sentence", engine="davinci-instruct-beta", temperature=0.44, top_p=1)
        db.userCollection.insert_one({"resume":jsonify( new_string ),"summary":block})
=======
        block = await cleaned_completion(f"I'm trying to summarize resumes\n###\nHere is an example of a resume\n###\n{new_string}\n###\nGive me 3 sentences of what would be the best position someone will fit in, this person's skills, what programming languages they know or what experience separates them from other applicants", engine="davinci-instruct-beta", temperature=0.66, top_p=0.57,max_tokens=110)
        db.db.collection.insert_one({"resume":new_string,"summary":block})
>>>>>>> 54d7a1c3c30040bb8dea63cbc8fd64d62e0c4173
    return logic

def returning_main(new_string):
    main(resume_manager(new_string))
