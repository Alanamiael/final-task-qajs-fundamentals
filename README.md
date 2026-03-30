#Final Task QAJS Fundamentals - Inventory Logic Flow
#Project Overview
This project contains automated end-to-end tests for the Inventory Logic Flow on the SauceDemo application (https://www.saucedemo.com/). The tests focus on data validation, sorting algorithms, and cart state management using the Page Object Model pattern with WebDriverIO.

#Project Structure
src/
├── config/
│ ├── eslint.config.mjs
│ └── wdio.conf.js
├── helpers/
│ └── logger.js
├── po/ (Page Objects)
│ ├── components/
│ └── pages/
│ ├── inventory.page.js
│ ├── login.page.js
│ └── route.pages.js
├── tests/
│ ├── cart.data.js
│ ├── uc1.tests.js
│ └── uc2.tests.js

The project is organized with configuration files in src/config including WebdriverIO and ESLint configurations, page objects in src/po/pages for the Page Object Model pattern, helpers in src/helpers for utility functions like logging, and test files in src/tests. The test suite includes uc1.tests.js for sorting validation, uc2.tests.js for cart state logic, and cart.data.js for test data parametrization.

#Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- Firefox and Edge browsers installed
- Allure CLI installed globally for report generation

#Installation
git clone https://github.com/Alanamiael/final-task-qajs-fundamentals.git
cd final-task-qajs-fundamentals
npm install

#Running Tests
Run the full test suite:

    npm run wdio

Run linting:

    npm run lint

Fix linting issues automatically:

    npm run lint:fix

#Allure Reports
Generate the report after running tests:

    npm run allure:generate

Open the generated report:

    npm run allure:open

Serve results directly without generating a static report:

    npm run allure:serve

Failed tests automatically capture screenshots via the afterTest hook in wdio.conf.js, which are attached to the Allure report for easier debugging.

#Configuration
The project uses WebDriverIO with Mocha as the test framework and https://www.saucedemo.com/ as the base URL. Tests run in parallel on Firefox and Edge with up to 6 instances. The default timeout for waitFor commands is 10 seconds and the Mocha timeout is 60 seconds. Both Spec reporter (console output) and Allure reporter (detailed analysis with screenshots) are enabled.

#Test Cases
##UC-1 — Sorting Validation
The goal of this test is to verify that the price sorting functionality works correctly when selecting "Price (low to high)" from the dropdown on the Inventory page.

Test flow:

1. Open the login page
2. Log in as standard_user with password secret_sauce
3. Verify navigation to the Inventory page
4. Select "Price (low to high)" from the sort dropdown
5. Scrape all item prices from the page

Validation logic: all prices are collected from the UI as a numeric array. A copy of that array is sorted programmatically in ascending order using JavaScript's native sort. The original array is then compared against the sorted copy — if both are equal, the UI sorting is confirmed correct.

    const prices = await inventoryPage.getAllPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);

##UC-2 — Cart State Logic
The goal of this test is to verify that the cart badge updates correctly as items are added and removed from the cart.

Test flow:

1. Log in as standard_user
2. Navigate to the Inventory page
3. Add two items defined in cart.data.js (e.g. Sauce Labs Backpack and Sauce Labs Bolt T-Shirt)
4. Verify the cart badge displays "2"
5. Remove one item via the Remove button on the Inventory page
6. Verify the cart badge updates to "1"

This bidirectional validation confirms that cart state management works correctly whether items are being added or removed.

#Page Objects
LoginPage handles login by opening the base URL and providing methods to enter credentials and submit the login form. InventoryPage exposes the sorting dropdown, scrapes item prices as an array, and provides methods to add and remove items by name. RoutePage validates the current page URL and provides helper methods for navigation checks.

#Locators Strategy
All locators are XPath-based with text-based selection for better maintainability and resilience to UI changes. Input fields use //input[@type="text"] and //input[@type="password"]. Buttons are located with //button[text()="Button Name"]. Dropdowns use //select with option selection by visible text. Page items use //div[contains(text(), "Item Name")]. The cart badge is accessed with //span[@class="shopping_cart_badge"].

#Logging
The project uses log4js for structured logging throughout test execution. Logged actions include login completion, item addition to cart, item removal from cart, and sort option selection. Logs help trace execution flow and debug failures.

#Credentials
Username: standard_user, password: secret_sauce.
