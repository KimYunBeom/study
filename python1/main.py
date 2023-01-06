from playwright.sync_api import sync_playwright

def run(playwright):
  ''' chromium, webkit, firefox, msedge '''
  browser = playwright.chromium.launch(headless=False)

  ''' show browser name '''
  print(browser.browser_type.name)

  ''' open a new page '''
  # page = browser.new_page()

  ''' stop to quit the app '''
  # page.pause()

with sync_playwright() as playwright:
  run(playwright)
