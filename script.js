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

//Getting HTML element/s using querySelector/All
// let getElement = document.querySelector('p') //returns 1st element
// let getElements = document.querySelectorAll('p') // returns all
// console.log(getElement)
// console.log(getElements)

//Access element with class 
//and if we select queryselectorall then all classes will be selected
// let getElement = document.querySelector('.balaram')
// console.log(getElement)

//Access elements with id
// let getElement = document.querySelector('#coders')
// console.log(getElement)

//updating and changing content
//inner text
//it ignores spaces
// let heading = document.querySelector('h2');
// console.log(heading);
// console.log(heading.innerText);
// let content = document.querySelector('.content');
// content.innerText += "<p>Hello welcome</p>";

//inner HTML
//it does not ignore spaces
// console.log(heading.innerHTML);
// content.innerHTML += "<h2> hello welcome </h2>";

//getting and setting attribute of element
// https://www.geeksforgeeks.org/
// let link = document.querySelector('a');
// console.log(link)
// console.log(link.getAttribute('href'));

//set attribute
// link.setAttribute('href', "https://www.google.com/maps");
// console.log(link.getAttribute('href'));
// link.innerText = "Google Maps";

//Adding the style
// let heading = document.querySelector('h2');
// heading.style.color = "green"; //we can give css colors starts in #
// heading.style.background = "yellow";

//parent, children and sibling elements
// let parentElement = document.querySelector('.content');
// all children of element
// console.log(parentElement.children)
// we can not run forEach method on HTMLcollection so
//first convert it into array
// console.log(Array.from(parentElement.children));

// Event basics (click event)
// let eventElement = document.querySelector('.clickMe');
// console.log(eventElement)
// eventElement.addEventListener('click',function(){
//     console.log('Clicked Me')
// })

//Array methods
//simple methods
// let letters = ["a","b","c","d","e"];
//reverese (Mutate the original Array)
// let reverse = letters.reverse();
// console.log(reverse);
// console.log(letters) //make sure you have original array otherwise 
// //in this mutating array, the original array will also change

//concatination 
// let num = [1,2,3,4,5];
// let concated = num.concat(letters);
// console.log([...num],[...letters]); //spread operators
// console.log(concated) //this is not a mutating method.
// it will not affect the original array.

//join
// let join = letters.join('-');
// console.log(join); // this is also non-mutating

//slice methods
// let num = [3,5,7,4,2];
// let extractArray = num.slice(2,5);
// console.log('Extracted Array = ',extractArray);
// console.log('Original Array = ',num); //this is also non-mutating

//splice method
// used to add new elememt to array 
//Array.splice(index,deletedValue,valueToBeAdded)
//return deleted elements in the form of an Array
// this is mutated - It will change the original array
// let num = [1,4,6,7,8,3,4];
// let updated = num.splice(1,1,1);
// console.log('Original Array =',num);
// console.log('Updated Array =',updated);

// at Method
// let num = [23,43,56,67];
// console.log(num[1]); // we can do like this but to be more functional
// console.log(num.at(0));

//getting element of the array
// console.log(num[num.length-1]);
// console.log(num.slice(-1)[0]);
// console.log(num.at(-2));

//at method can work on strings
// let name = 'Balaram';
// console.log(name.at(3));
// console.log(name.at(-1));

//map method
// let salaries = [4000,5000,7000,12000];
// let newSalaries = salaries.map(salary =>{
//     let incrementedSalary = salary/2;
//     return salary + incrementedSalary
// })
// console.log("After 50% Increment =",newSalaries);

//filter method
// let gifts = ['ring','watch','teddy','ring','watch','phone'];
// // now if you filter 'watch' and 'ring'
// let filterArray = gifts.filter(gift => {
//     if (gift == 'watch' || gift == 'ring'){
//     return(gift)
//     }
// })
// console.log(filterArray);

// reduce method
// Array.reduce(function(total,currentValue),initialValue)
// sum of elements using reduce method
// let num = [3,5,7,2,4,5,7];
// let sum = num.reduce(function(total,currentValue){
//     return total + currentValue;
// },0)
// console.log(sum);

// "Find" method
//it returns the 'first' element we are looking for
// let students = [{id:1,name:'Balaram'},{id:2,name:'Sabat'}];
// let result = students.find(student =>{
//     return (student.id === 1)
// }) 
// console.log(result);

// findIndex method
// in above find method that returns the object but in this 
// findIndex method it will give you the index value otherwise it returns -1
// let students = [{id:1,name:'Balaram'},{id:2,name:'Sabat'}];
// let result = students.findIndex(student =>{
//     return (student.id === 2)
// }) 
// console.log(result);

// another example
// let ages = [23,45,13,56];
// let result = ages.findIndex(age =>{
//     return age > 30;
// })
// console.log(result);

//'some' and 'every' method
// some method returns true if 'any' array element pass the test
// every method returns true if 'all' array elements pass the test
// let scores = [54,58,76,89];
// let result = scores.some(score =>{
//     return score > 60;
// })
// console.log('Some Method', result);

// let grades = [56,87,90,78];
// let result1 = grades.every(grade =>{
//     return grade > 50 ;
// })
// console.log('Every Method', result1)

