function solve() {
   const output = document.querySelector('textarea');
   const shoppingCartRef = document.querySelector('.shopping-cart');
   const checkoutRef = document.querySelector('.checkout');
   const cart = [];

   shoppingCartRef.addEventListener('click', shoppingCart);
   checkoutRef.addEventListener('click', checkout);

   function shoppingCart(ev){
      if (ev.target.tagName === 'BUTTON' && ev.target.className === 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({ title, price });

         return output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   }
   function checkout() {
      let result = cart.reduce((acc, c) => {
         acc.items.push(c.title);
         acc.total += c.price;
         return acc;
      }, {items: [],total: 0} );
      
      checkoutRef.removeEventListener('click',checkout);
      shoppingCartRef.removeEventListener('click',shoppingCart);
      return output.value += `You bought ${[...new Set(result.items)].join(', ')} for ${result.total.toFixed(2)}.`;
   }  
}