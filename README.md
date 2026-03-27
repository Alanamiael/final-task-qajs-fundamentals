UC-1 Sorting Validation (explaining the sorting validation logic)

Description
This test verifies that the sorting functionality on the Inventory page works correctly when selecting “Price (low to high)”.

Test Steps:

1. Open the login page
2. Login as standard_user
3. Make sure the user is on the Inventory page
4. Select “Price (low to high)” from the sorting dropdown
5. Get all item prices from the page

Validation Logic
• All prices are collected from the UI as an array
• A copy of this array is sorted programmatically in ascending order
• The original array (from UI) is compared with the sorted one

        const prices = await inventoryPage.getAllPrices();
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices);

Expected Result
The list of prices displayed on the page should already be sorted in ascending order. If the UI sorting works correctly, both arrays will be equal and the test will pass.
