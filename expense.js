class Expense {
    constructor(id,date,expense_name,cost){
        this.id=id;
        this.date = date;
        this.expense_name = expense_name;
        this.cost=cost;
    }
}

tracker=[]

function add_product(id,date,expense_name,cost){
    let a= new Expense(id,date,expense_name,cost);
    tracker.push(a)
}

add_product(1,"2ndmarch","toothpaste",60)
add_product(2,"5thmarch","food",135)
add_product(3,"14thmarch","doctor",500)



function edit_expense( id, cost ) {
    for (var i in tracker) {
      if (tracker[i].id == id) {
        tracker[i].cost = cost;
      }
    }
 }
edit_expense(3,1000)


function delete_expense(id,expense_name){
    for (var i in tracker){
    let product = tracker[i];
      if (product.id === id) {
        tracker.splice(i, 1);
        return;
            
        }
    }
}
delete_expense(2)


function displayTotalExpenses() {
    let total = 0;
    tracker.forEach(expense => {
        total += expense.cost;
    });
    return total;
}

console.log(tracker);
console.log("Total expenses:", displayTotalExpenses());
