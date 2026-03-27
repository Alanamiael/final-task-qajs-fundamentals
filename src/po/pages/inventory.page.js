const {
  InventoryHeaderComponent,
  InventoryItemComponent,
} = require("./../components/route.components.js");

class InventoryPage {
  constructor() {
    this.header = new InventoryHeaderComponent();
    this.items = new InventoryItemComponent();
  }

  async sortBy(option) {
    await this.header.selectFilter(option);
  }

  async getCartBadgeNumber() {
    return await this.header.getCartBadgeNumber();
  }

  async clickItemButton(productName, action) {
    await this.items.clickItemButton(productName, action);
  }

  async getAllPrices() {
    return await this.items.getAllPrices();
  }
}

module.exports = InventoryPage;
