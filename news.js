let people = [
    {
      name: "Mike",
      age: 12,
      gender: "male",
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female",
    },
    {
      name: "Cheryl",
      age: 22,
      gender: "female",
    },
    {
      name: "Sam",
      age: 30,
      gender: "male",
    },
    {
      name: "Suzy",
      age: 4,
      gender: "female",
    },
  ];

  for (var person of people) {
    for (var key in person) {
        console.log(person[key]);
    }
}
