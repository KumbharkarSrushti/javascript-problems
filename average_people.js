let people = [
    {
      name: "srushti",
      age:22,
      
    },
    {
      name: "Alpana",
      age: 21,
    },
    {
      name: "Aarti",
      age: 20,
    },
    {
      name: "Mayuri",
      age: 20,
    },
    {
      name: "Ankita",
      age: 19,
      },
  ];

length=(people.length)
  
function calculateTheAverage(people) {
    let total = 0;
    for (const item of people) {
        const age = item.age
        total +=age
        average=total/length
    }
      return average;
  }
  const total = calculateTheAverage(people);
  console.log(total);
  

