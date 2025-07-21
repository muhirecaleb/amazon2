export const cart = [];

export function adddtoCart(productId) {
  let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
 
    if (matchingItem) {
      matchingItem.quality += 1;
    } else {
      cart.push({
        productId: productId,
        quality: 1,
      });
      
    }
}

