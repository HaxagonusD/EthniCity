# Functions to scrapes indeed job posting
import requests
from time import sleep
from typing import Any, Dict, List

from bs4 import BeautifulSoup
from bs4.element import NavigableString


REQUEST_INBETWEEN_DELAY_TIME = 0.5  # seconds


def scrape_jobs(url_list) -> List[Dict[str, Any]]:
    """Returns list of dict containing the scraped data. Result is parallel to input url list"""
    results = []
    for url in url_list:
        print(f"scraping {url}")
        sleep(REQUEST_INBETWEEN_DELAY_TIME)
        results.append(scrape_job(url))
    return results


def scrape_job(url) -> Dict[str, Any]:
    """Returns scraped data as a dict"""
    response = requests.get(url)
    content = response.content
    soup = BeautifulSoup(content, 'html.parser')

    # Title and company section
    title = _find_value_by_name(
        soup,
        "h1",
        {"class": "icl-u-xs-mb--xs icl-u-xs-mt--none jobsearch-JobInfoHeader-title"},
        "Failed to extract title"
    )
    company = _find_value_by_name(
        soup,
        "div",
        {"class": "icl-u-lg-mr--sm icl-u-xs-mr--xs"},
        "Failed to extract company"
    )

    # Job details section
    salary = _find_detail_section_value(soup, "Salary")
    job_type = _find_detail_section_value(soup, "Job Type")

    # Job description section
    text = _find_job_description(soup)

    # Footer metadata section
    days_posted = _find_days_posted(soup)

    return {
        "title": title,
        "company": company,
        "salary": salary,
        "jobType": job_type,
        "daysPosted": days_posted,
        "jobDescription": text
    }

def _find_value_by_name(soup, name, attr, failure_msg):
    title = None
    try:
        title = soup.find(name, attr).text
    except Exception:
        print(failure_msg)
    return title


def _find_location(soup):
    location = None
    try:
        node = soup.find("div", {"class": "jobsearch-DesktopStickyContainer-subtitle"})
        location =list(node.children)[1].text
    except Exception:
        print("Failed to extract location")
    return location


def _find_detail_section_value(soup, detail_section_text: str):
    value = None
    try:
        job_detail_descriptiion_section = soup.find_all("div", {"class": "jobsearch-JobDescriptionSection-sectionItem"})
        for section in job_detail_descriptiion_section:
            children = list(section.children)
            if children[0].text == detail_section_text:
                value = children[1].text
                break
    except Exception:
        print(f"Failed to extract {detail_section_text}")
    return value


def _find_job_description(soup):
    """Returns an array of text of the description from flattening each tag"""
    try:
        job_description_tree = soup.find("div", {"id": "jobDescriptionText"})
        text = _leaf_node_text(job_description_tree)
    except Exception:
        print("Failed to extract job description")
    return text


def _find_days_posted(soup):
    try:
        footer_tree = soup.find("div", {"class": "jobsearch-JobMetadataFooter"})
        footer_tree_children = list(footer_tree.children)
        days_posted = None
        for child in footer_tree_children:
            if "days" in child.text:
                days_posted = child.text
                break
    except Exception:
        print("Failed to extract days posted")
    return days_posted


def _leaf_node_text(node):
    try:
        # This works too ``all = node.find_all(string=True)`` but this style help output nested structure if we need to
        text = []

        def _get_leaf_text(node):
            if isinstance(node, NavigableString):
                text.append(node)
                return

            children_list = list(node.children)
            for child_node in children_list:
                _get_leaf_text(child_node)

        _get_leaf_text(node)
        return text
    except Exception:
        "Failed to get job description"
