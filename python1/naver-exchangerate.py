from playwright.sync_api import sync_playwright

def searchNaver(page, keyword):
  page.goto('https://www.naver.com')
  page.type('input[id=query]', keyword)
  page.click('button[id=search_btn]')
  page.wait_for_selector('text=' + keyword)
  page.screenshot(path="네이버환율.jpg")

def run(playwright):
  browser = playwright.chromium.launch(headless=False)
  page = browser.new_page()
  
  searchNaver(page, '환율')

  page.pause()

with sync_playwright() as playwright:
  run(playwright)
