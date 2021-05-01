# Run this script to scrape and insert all urls in URLS_TO_SCRAPE list

from util.job_scraper import scrape_jobs
import data.posting_urls as urls
import db

URLS_TO_SCRAPE = urls.url_batch_1

# Scrape
results = scrape_jobs(URLS_TO_SCRAPE)
print(results)

# Insert results into db
db.insert_postings_into_job_collection(results)
