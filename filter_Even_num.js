const even = [32,33,16,40,2,6,5,15,45];
const result = even.filter(checkAdult);

function checkAdult(even) {
  return even%2==0;
}
console.log(result)