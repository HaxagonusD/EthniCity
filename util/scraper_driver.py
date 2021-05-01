# Demo script to use scraper
# Need to get full page indeed URL by shrinking your browser window before clicking on a job
# 1) Do a search like this https://www.indeed.com/jobs?q=software+engineer&l=New+York%2C+NY
# 2) Shrink your browser window to fairly small
# 3) Click on a job and it'll launch a new tab for the job, grab that URL

import json
import pprint as pp

from job_scraper import scrape_job, scrape_jobs

SCRAPED_JOBS_DUMP_FILE = 'sample_scraped_jobs.json'

# Just scrape 1 and take a look at what the dict look like after scraping
result = scrape_job('https://www.indeed.com/viewjob?jk=c632d67548fbdbae&q=data+engineer&l=New+York%2C+NY&tk=1f4i8h8ou3og3001&from=web&advn=2089891622738549&adid=258202704&ad=-6NYlbfkN0BR3ykMnr3Vw97HK5IC0i9Uo32NXohanwqRY-CI8z69bhgeevNMD5QwngToFV7LqAOkmOJK17cd_ZJv0-ZfOOgXOC3SdExPh9ZPAoryLuAtatLotpriFJrGoEfQBhh3D3honRT_PBMybCVmqWhiXCNW93cByRB9Lioq13O8ZlCbKkzd_XOQJ1pCusKTRg_H4zNkhhelY47HOtMFcyBCXK4sDXNYF32FogisK7kS4gWEVuLUltuaCexP5z4GXtOStrQGPOocY0UEfQ7MuztkPI6pFYlOOIXgUKLp_ZIf-flh6TmTN1mtejYcDmWZO2vC5u_Tuq_Rs3Z2qQ%3D%3')
pp.pprint(result)

urls = [
    'https://www.indeed.com/viewjob?cmp=Koyfin&t=Senior+Data+Engineer&jk=3433a03b05a7415c&sjdu=QwrRXKrqZ3CNX5W-O9jEvUUdXQhhKNOAMcM5flKILoi8Wcg95REeNW2UC3eKQXgOm7yNS9qrk25LbsaDIY_YIg&tk=1f4i4r55ht57n801&adid=363332321&ad=-6NYlbfkN0A2_1vI8fwFeZf0vK--yNgA55z5N7Pf91wxu5Qw_sXhd2yCBj2hKph-nbPSpGmIsCLGnvbSrpJpJUziDzvYPag1vepmU9_JuiGJYDbuYh-Rd3Im7EKx78-y5CxYwK6X1IUj5zMGO2ipHr-dmUYUsdhM38XIkgyltihs6DEGnj1jL5gaIIyCo7Svdz2plHsOVdQvmzYfhQTmV2aelsf0sH6BCM_z8j3uVHX8t1uVX8orRd1FP3gBFRBRdeytG94Cxc9BzpeL2M65pM74Xs47s',
    'https://www.indeed.com/viewjob?jk=c632d67548fbdbae&q=data+engineer&l=New+York%2C+NY&tk=1f4i8h8ou3og3001&from=web&advn=2089891622738549&adid=258202704&ad=-6NYlbfkN0BR3ykMnr3Vw97HK5IC0i9Uo32NXohanwqRY-CI8z69bhgeevNMD5QwngToFV7LqAOkmOJK17cd_ZJv0-ZfOOgXOC3SdExPh9ZPAoryLuAtatLotpriFJrGoEfQBhh3D3honRT_PBMybCVmqWhiXCNW93cByRB9Lioq13O8ZlCbKkzd_XOQJ1pCusKTRg_H4zNkhhelY47HOtMFcyBCXK4sDXNYF32FogisK7kS4gWEVuLUltuaCexP5z4GXtOStrQGPOocY0UEfQ7MuztkPI6pFYlOOIXgUKLp_ZIf-flh6TmTN1mtejYcDmWZO2vC5u_Tuq_Rs3Z2qQ%3D%3'
]

# Get the data just as a list of Python dict
print("Doing multiple urls...")
results = scrape_jobs(urls)

# Write to a file the url and json dumped scraped data
data_dump = [{"url": url, "scrapedData": json.dumps(result)} for url, result in zip(urls, results)]
with open(SCRAPED_JOBS_DUMP_FILE, 'w') as file:
    json.dump(data_dump, file)
print(f"Dumped scraped resultls to {SCRAPED_JOBS_DUMP_FILE}")


