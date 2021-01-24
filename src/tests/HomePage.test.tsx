import { Selector, ClientFunction } from 'testcafe';

fixture`Test Add to Cart Button`
  .page`http://localhost:3000`;

test('Add some mattresses to the cart', async t => {
  const addToCartButton = Selector('.add-to-cart');
  const addToCartButtonExists = addToCartButton.exists;
  const cartItemsCount = Selector('.cart-count');
  const loomButton = Selector('.btn').withText(/Loom & Leaf/i);
  const loomButtonExists = loomButton.exists;
  const zenButton = Selector('.btn').withText(/Zenhaven/i);
  const zenButtonExists = zenButton.exists;
  const getLocalStorageItem = ClientFunction(key => localStorage.getItem(key));
  const cartItems = getLocalStorageItem('cart');

  await t
    .setTestSpeed(0.7) // just to you appreciate the test but this line is not necessary...
    .expect(addToCartButtonExists)
    .ok()
    .expect(loomButtonExists)
    .ok()
    .expect(zenButtonExists)
    .ok()
    .click(addToCartButton)
    .expect(cartItemsCount.textContent)
    .eql('1')
    .click(zenButton)
    .click(loomButton)
    .click(addToCartButton)
    .expect(cartItemsCount.textContent)
    .eql('2')
    .expect(cartItems)
    .contains('Saatva Classic')
    .expect(cartItems)
    .contains('Loom & Leaf');
});
