from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to homepage
            page.goto("http://localhost:3000")

            # Wait for content to load
            page.wait_for_selector('text=Shelfie')

            # Check for images that were updated (logo, badges)
            # Logo in header
            logo = page.locator('img[alt="Shelfie Logo"]').first
            if logo.is_visible():
                print("Logo visible")

            # Badges (using .first() since they appear multiple times)
            apple_badge = page.locator('img[alt="Download in App Store"]').first
            if apple_badge.is_visible():
                print("App Store Badge visible")

            google_badge = page.locator('img[alt="Get it on Google Play"]').first
            if google_badge.is_visible():
                print("Google Play Badge visible")

            # Take full page screenshot
            page.screenshot(path="verification/homepage.png", full_page=True)
            print("Screenshot saved to verification/homepage.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
