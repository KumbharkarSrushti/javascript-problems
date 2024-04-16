// let readlineSync = require("readline-sync");
// var input=readlineSync.question("write a sentence")
// input="hello i am srushti.i am 22 years old."
let str = "I am not gonna live forever, but I wanna live while I am alive",
    split = str.split(" "),
    obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj) 