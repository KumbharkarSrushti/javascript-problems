class Book {
    constructor(id,userName,bookName,type){
        this.id=id;
        this.userName = userName;
        this.bookName = bookName;
        this.type=type;
    }
}


inventory=[]



function add_product(id,userName,bookName,type){
    let a= new Book(id,userName,bookName,type);
    inventory.push(a)
}

add_product(1,"srushti","chhava","history")
add_product(2,"alpana","lovestory","lovestory")
add_product(3,"aarti","mockingbird","classic")


function update_books( id, bookName,type) {
    for (var i in inventory) {
      if (inventory[i].id == id) {
        inventory[i].bookName = bookName;
        inventory[i].type = type;
      }
    }
 }

update_books(2,"Romeo and Juliet","lovestory")
update_books(3,"Beloved","horror")


function removeProduct(type){
    for (var i in inventory) {
      const product = inventory[i];
      if (product.type === type) {
        inventory.splice(i, 1);
        return;
      }
    }
}
removeProduct("lovestory")

function displayInventory() {
    console.log("Current Inventory:");
    inventory.forEach(book => {
        console.log(`ID: ${book.id}, User: ${book.userName}, Book Name: ${book.bookName}, Type: ${book.type}`);
    });
}

displayInventory();







