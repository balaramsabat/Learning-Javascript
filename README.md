# Learning-Javascript 
**by Balaram Sabat**

---
**Topics** covered in Javascript :-
- Data Types and Control Flow
- Functions
- Objects
- DOM - Document Object Model
- DOM - Forms
- Array Methods
- Date and Time
- Local Storage
- OOPs
- Async JS and ES6


### Data Types and Control Flow

``` javascript
var score = 34;
var score = 56; //re-declare
let score = 54; // generally we use
console.log(score);

// constant 
const value = 10;
console.log(value);

// 7 data types
// numbers 1,2,3,4...
// string - "I am Balarm"
// Boolean - true/false
// null - intentionally absence of value
let score = null;
score = 12;
console.log(score);

// undefined
let points;
points = 34;
console.log(points);

// object and complex data structure
// symbol looks like object

// Control flow
// For loop
for (let i = 1; i<= 10; i++){
    console.log('Balaram printing', i)
}
// or
let dishes = ['Biriyani', 'sweets','prawn','fish','paneer'];
for (let i=1; i< dishes.length ; i++){
    console.log('The dishes are', dishes[i])
}
// while loop
let dishes = ['Biriyani', 'sweets','prawn','fish','paneer'];
let i = 0;
while(i<dishes.length){
    console.log('The dishes are', dishes[i])
    i++;
}
// do-while
let i = 1;
do{
    console.log('At lease run time =', i);
    i++;
}(i<=1) //condition false already

if-else condition
let budget = 5000;
if(budget>4000){
    console.log('Will do dinner hotel')
}
else{
    console.log('Will do dinner in home')
}
```



<p>If you have any doubts on something, please reach out to me.</p>