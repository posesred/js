const shoes = ["Nike","Adidas","Champion","Puma","Payless"];


// for(const [i,shoe] of shoes.entries()){
//     console.log(`${shoe} is the ${i} index `);
// }

// function addTotal(){
//     let total = 0;
//     for(const num of arguments){
//         total+= num;
//     }
//     console.log(total);
//     return total;
// }
// // addTotal(12,23,45,56,78,65);
// const name = 'Sanatjon Burkhanov';
// for (const char of name){
  // console.log(char);
// }

// const header = document.querySelectorAll('h5');
// console.log(header);

// for(const h of header){
//     h.addEventListener('click',function(){
//         console.log(this.textContent);
//     })
// }
// const [ ...allItems] = shoes;
// console.log(allItems); 

// const headers = document.querySelectorAll('h5');
// const headerArray = Array.from(headers,(node)=> console.log(node.textContent));
// headerArray.map((node)=> console.log(node.textContent));
// console.log(headers);
// function addTotal(){
//   const numbers = Array.from(arguments);
//   return numbers.reduce((prev,next)=>prev+next,0);
// }

// const total = addTotal(12,34,45,56,68);
// console.log(total);

// const nums = Array.of(12,34,435,345,54);
// console.log(nums);


// const comments =[ 
// {
//   id:1,
//   likes:250,
//   name: "Ya"
// },
// {
//   id:2
// }]

// for (const [key,value] of comments){
//   if(key ==="id"){
//     console.log(key,value);
//   }
// }

// function Person(name,game){
//   this.name = name;
//   this.game = game;
// }
// Person.prototype.greeting = function(){
//   console.log(`Hello my name is ${this.name}`);
// }

// const person1 = new Person("John","Crisis");
// person1.greeting();


// Person.prototype.myGame = function(){
//   console.log(`My fav game is ${this.game}`);
// }
// person1.myGame();