class Product {
    constructor(id,name,price,quantity){
        this.id=id;
        this.name = name;
        this.price = price;
        this.quantity=quantity;
    }
}


inventory=[]


function add_product(id,name,price,quantity){
    let a= new Product(id,name,price,quantity);
    inventory.push(a)
}
add_product(2,"bottle",100,1)
add_product(1,"suncream",50,2)
add_product(3,"coffee",2,4)





function update_product( id, quantity ) {
    for (var i in inventory) {
      if (inventory[i].id == id) {
        inventory[i].quantity = quantity;
      }
    }
 }

update_product(3,8)



function removeProduct(id){
    for (var i in inventory) {
      const product = inventory[i];
      if (product.id === id) {
        inventory.splice(i, 1);
        return;
      }
    }
}
removeProduct(2)

function displayInventory() {
    console.log("Current Inventory:");
    inventory.forEach(product => {
        console.log(`${product.name},${product.price},(${product.quantity})`);
    });
}

displayInventory();



