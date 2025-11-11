function getCart() {
    const cartJson = localStorage.getItem("accountingCart");
    return cartJson ? JSON.parse(cartJson) : [];
  }
  function saveCart(cart) {
    localStorage.setItem("accountingCart", JSON.stringify(cart));
  }
  
  function addToCart(id, title, price) {
    const cart = getCart();
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      const item = {
        id: id,
        title: title,
        price: price,
        quantity: 1,
        totalPrice: price,
      };
      cart.push(item);
    }
    saveCart(cart);
  
    updateCartBadge();
  }
  
  function updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (badge) {
      const cart = getCart();
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = totalQuantity;
    }
    if (totalQuantity > 0) {
      badge.style.display = "block";
    } else {
      badge.style.display = "none";
    }
  }
  