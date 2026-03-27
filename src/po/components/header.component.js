class InventoryHeaderComponent {
  get filterDropdown() {
    return $('//select[@class="product_sort_container"]');
  }
  filterOptions = {
    NAME_A_Z: "Name (A to Z)",
    NAME_Z_A: "Name (Z to A)",
    PRICE_LOW_HIGH: "Price (low to high)",
    PRICE_HIGH_LOW: "Price (high to low)",
  };
  async selectFilter(option) {
    await this.filterDropdown.selectByVisibleText(option);
  }

  get cartBadge() {
    return $('//span[@class="shopping_cart_badge"]');
  }
  async getCartBadgeNumber() {
    return await this.cartBadge.getText();
  }
}

module.exports = InventoryHeaderComponent;
