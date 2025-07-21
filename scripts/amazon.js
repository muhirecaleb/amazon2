'use strict';

import  * as cartModule from '../data/cart.js';
import { products } from '../data/products.js';

let productsHTML = "";


products.forEach((product) => {
  productsHTML += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quality-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-Id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>

    
        `;
      });
      
      document.querySelector(".js-product-grid").innerHTML = productsHTML;
  


function updateCartQuality(productId) {

let select = document.querySelector(`.js-quality-selector-${productId}`)
  cartQuality +=Number(select.value)
    document.querySelector(".js-cart-quality").textContent = cartQuality;

     const addedMessage = document.querySelector(`.js-added-${productId}`)
 if(addedMessage) {
    addedMessage.classList.add("opacity")
 }
 setTimeout(() =>{ 
  addedMessage.classList.remove("opacity")},1500)
}



let cartQuality = 0;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
   const productId = button.dataset.productId;
  button.addEventListener("click", function () {
   cartModule.adddtoCart(productId);
    updateCartQuality(productId);
  });
});
