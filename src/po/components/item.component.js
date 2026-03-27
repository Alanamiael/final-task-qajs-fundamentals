class InventoryItemComponent {
  get priceElements() {
    return $$(
      '//div[@class="inventory_item"]//span[@class="inventory_item_price"]',
    );
  }

  async getAllPrices() {
    const prices = [];

    const elements = await this.priceElements;

    for (const el of elements) {
      const text = await el.getText();
      prices.push(parseFloat(text.replace("$", "")));
    }

    return prices;
  }
  async clickItemButton(productName, action) {
    const buttonText = action === "add" ? "Add to cart" : "Remove";

    const button = await $(
      `//div[text()="${productName}"]
      /ancestor::div[@class="inventory_item"]
      //button[contains(text(),"${buttonText}")]
      `,
    );

    await button.click();
  }
}
module.exports = InventoryItemComponent;
