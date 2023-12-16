const person = {
    name: "Harry Mack",
    age: 30,
    expertise: "jaw-dropping visual freestyle rapping",
    youtube: "www.youtube.com/harrymack",
  };
const {name = "First Last", youtube = "www.youtube.com"} = person;
console.log(`${name} ${youtube}`)
