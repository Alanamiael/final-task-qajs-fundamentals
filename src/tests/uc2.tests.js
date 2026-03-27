const { LoginPage, InventoryPage } = require("./../po/pages/route.pages.js");
const { cartOperations } = require("./cart.data.js");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("UC-2 Cart State Logic", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login();
  });

  it("Change cart badge number", async () => {
    for (const item of cartOperations) {
      await inventoryPage.clickItemButton(item.itemName, item.action);
    }
    expect(await inventoryPage.getCartBadgeNumber()).toBe("1");
  });
});
