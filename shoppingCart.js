let shoppingCart = [
    {
      name: "T-shirt",
      price: 200,
      quantity: 2, 
    },
    {
      name: "Teddy",
      price: 400,
      quantity: 1,
    },
    {
      name: "Smart-watch",
      price: 1000,
      quantity: "1",
    },
    {
      name: "Bangles",
      price: 100,
      quantity: "4",    
    },
    {
      name: "Water Bottle",
      price: 50,
      quantity: "2",
      },
  ];
  
  function calculateTotalPrice(shoppingCart) {
    let totalPrice = 0;
      for (const item of shoppingCart) {
        const quantity = item.quantity
        const Price=item.price
        sum=quantity*Price
        totalPrice += sum;
    }
      return totalPrice;
  }
    const total = calculateTotalPrice(shoppingCart);
  console.log(total);
  