export let cart =
JSON.parse(localStorage.getItem('cart'))

if(!cart) {
  cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quality: 2,
    deliveryOptionsId: '1'
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quality: 1,
    deliveryOptionsId: '2'
  },
];
}



function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function adddtoCart(productId,Quality) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quality =  matchingItem.quality + Quality;
    
  } else {
    cart.push({
      productId: productId,
      quality: Quality,
      deliveryOptionsId: '1',
    });
  }
  saveToStorage()
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage()
}

export function updateQuantity(productId,newQuality) {
  cart.forEach(product => {
    if(productId === product.productId) {
      product.quality = newQuality;
      saveToStorage();
    }
  })
}