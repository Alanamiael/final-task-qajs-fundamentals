const { LoginPage, InventoryPage } = require("./../po/pages/route.pages.js");
const logger = require("../helpers/logger");
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("UC-1 Sorting Validation", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login();

    expect(await browser.getUrl()).toContain("inventory.html");
  });

  it("Sort items by low to high price", async () => {
    logger.info("Starting sort test");
    await inventoryPage.sortBy(
      inventoryPage.header.filterOptions.PRICE_LOW_HIGH,
    );

    const prices = await inventoryPage.getAllPrices();
    logger.info(`Prices from UI: ${prices}`);
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
    logger.info("Sort test passed");
  });
});
