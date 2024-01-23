// //passing function as argument (higher order function)
// let upperCase = function(str){
//     return str.toUpperCase();
// }
// let lowerCase = function(str){
//     return str.toLowerCase();
// }
// let transform = function(str,fun){
//     return fun(str)
// }
// console.log(transform('helLo', lowerCase))

// //Function returns another function
// let compliment  = function(msg){
//     return function(name){
//     console.log(`${msg} ${name}`);
//     }
// }
// console.log(compliment ('i am very good')('coder'))

// //immediately invoked function expression - IIFE
// (function(){
//     console.log('I am very busy');
// })()

// //setTimeout and setInterval - timer function
// function name(){
//     console.log('I am Balaram')
// }
// setTimeout(name,5000)   'or '
// setTimeout(function name(){
//     console.log('I am Balaram')
// },5000)
// with one or multiple argument
// function name(sabat,msg,data){
//     console.log(`I am Balaram ${sabat}${msg}${data}`)
// }
// setTimeout(name,5000,'sabat',' living in ',' chennai') 

// function name(){
//     console.log('I am Balaram')
// }
// setInterval(name,5000)

// //Arrow Function
// let invitation = name => (`I have invited my friend ${name} to this event`)
// console.log(invitation('koko'))

// //OBJECTS in Javascript.
// let car = {
//     color: 'black',
//     model: '2024',
//     company: 'Audi'
// }
// console.log(car);
// console.log(car['color']);
// console.log(car.company);
// let pName = 'color';
// console.log(car[pName])
// car['color'] = 'red'
// console.log(car.color)
// //deleting permanently of an object
// delete car.company;
// console.log(car.company)

// //function Vs method
// //The function which is defined inside an object is called method.
// let person = {
//     ageCal: function(birthyear){
//         let age = 2024 - birthyear;
//         return age;
//     }
// }
// console.log(`Age is ${person.ageCal(1994)}`)
// //In method we have a special keyword 'this'. The things which 
// //is variable and we are refering them as object then we can 
// //use 'this' key word.
// let person = {
//     firstName:'Balaram',
//     lastName : 'Sabat',
//     city : 'Chennai',
//     dob : 1995,
//     job : 'software developer',
//     getSummary:function(){
//       //  return `${this.firstName} ${this.lastName} lives in ${this.city} has come to this world on ${this.dob} working as ${this.job}`
//     return this
//     }
// }
// console.log(person.getSummary())

// //forEach method - it is used to traverse over the array.
// let dishes = ['rice', 'dal', 'prawn']
// for (let i = 1; i <= dishes.length; i++){
//     console.log(dishes[i])
// }
// console.log('-----------------')
// dishes.forEach(function(element){
//     console.log(element)
// })

// //oject inside Array
// let dishes = [{chef:'koko',dish:'prawn'},{chef:'Balu',dish:'fish'}]
// console.log(dishes)
// for(let i=0; i<=dishes.length; i++){
//     console.log(`this chef ${dishes[i].chef} makes dish of ${dishes[i].dish}`)
// }

// //Math object - built in object in javascript
// console.log(Math)
// let number = 7.6;
// console.log(Math.round(number)) // round to near digit
// console.log(Math.floor(number))
// console.log(Math.ceil(number))
// console.log(Math.round(number))
// console.log(Math.trunc(number))

// //call and apply method
// //we can manually use 'this' keyword using call and apply
// let myPlane = {
//     air: 'indigo',
//     city: 'chennai',
//     bookings:[],
//     book: function(fid,name){
//         console.log(`${name} booked a flight on ${this.air}  having flight id ${fid} from ${this.city}`)
//         this.bookings.push({flight:`${this.air}`,name:`${name}`})
//     }
// }
// myPlane.book(555,'Koko')
// myPlane.book(75,'koka')
// console.log(myPlane)
// // let's take new airline launched in same group
// let childPlane = {
//     air: 'spicejet',
//     city: 'Bangalore',
//     bookings:[],
// }
// let book = myPlane.book
// // here it throw an error because 'this' is undefined 
// // now solution is using "call" method
// book.call(childPlane, 900, 'Balu')
// console.log(childPlane)

// "Bind" Method

// function greet(){
//     console.log(`Hi welcome ${this.firstName} ${this.lastName}`)
// }
// let user = {
//     firstName :'Balaram',
//     lastName :'Sabat'
// }

// let greets = greet.bind(user);
// greets();

// "Objects/Arrays" how "reference" are passed to variable
// let arr = [1,2,3,4,5];
// let getRef = arr;
// getRef[5] = 6;
// console.log('Original', arr) // also change
// console.log('getRef', getRef)
// console.log('**********************')
// // pass by value
// let getValue = [...arr] //spread operator "..."
// getValue[5] = 8;
// console.log('Original', arr) 
// console.log('getValue', getValue)

// Javascript DOM - document object model
// console.log(document)
// console.log(document.URL)

