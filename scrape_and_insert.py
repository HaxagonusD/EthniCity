from util.job_scraper import scrape_jobs
import data.posting_urls as urls
import db

# Scrape
results = scrape_jobs(urls.url_batch_1)
print(results)

# Insert results into db
db.insert_postings_into_job_collection(results)
