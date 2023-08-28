// console.log('hello world');


//operators
// fruit = prompt('what is your favorite fruit')
// console.log(fruit)

/*

tipPercentage = Number(prompt('tip percentage?') / 100)
tipAmount = food * tipPercentage
totalAmount = tipAmount + food
console.log(tipPercentage)
alert(`total amount will be ${totalAmount}`)
*/

//user input
// food = Number(prompt('How much does your food cost'))

// Baby weather app
// if rain then grab umbrella
// else where your sunglasses
// let weather
// if (weather == 'rain') {
//     console.log('Grab your umbrella')       
// } else {
//     console.log('Wear your sunglasses')
// }

// function sayMyName(name) {
//     console.log(name)
// }

// sayMyName('bored')


// function greeting(name) {
//     console.log(`hi ${name}, nice to meet you!`)
// }
// greeting('pleasemoveonnow')


// function sum (a, b) {
//     return a + b
// }

// let num1 = sum(2,4)

// ES6
// Arrow Functions =>
// // arrow function with explicit return
// const sumArrow4 = (a, b) => {
//   return a + b
// }

// arrow function with implicit return
// IMPORTANT: For implicit return, remove curly braces
// const sumArrow5 = (a, b) => a + b


// function add(a,b){
//     //Add function here
//     return a + b
//   }
  
//   function sub(a,b){
//     //Subtract function here
//     return a - b
  
//   }
  
//   function div(a,b){
//     //Divide function here
//     return a / b
//   }
  
//   function mul(a,b){
//     //Multiply function here
//     return a * b
//   }
  
//   console.log('hello from the SUM exercise')
//   /* 
//     TODO: create a function that console logs the result of any of the above operations.
    
//   */
//   const mathit = (op, a, b) => {
    // switch (op) {
    //   case add:
    //     console.log(add(a,b))
    //     break;
  
    //   case sub: 
    //   console.log(sub(a,b))
    //   break;
  
    //   case div: 
    //   console.log(div(a,b))
    //   break;
  
    //   case mul: 
    //   console.log(mul(a,b))
    //   break;
  
    //   default:
    //     console.log('can\'t math for shit')
    // }
    // return console.log(op(a,b))

  // }


//   //arrays

//   const groceries = ['banana', 'apple', 'orange', 'pear']
//   console.log(groceries[2])

//   groceries.push('cookie')

//   groceries.push('plum')

//   //slice
// // inclusive of first value, but not inclusive of second value
//   console.log(groceries.slice(5,7))

// console.log('index of below')
//   console.log(groceries.indexOf('plum'))

//   console.log(groceries.length)

 // objects
// const obj = {
//   shirt: 'white',
//   name: 'leo'
// }



// console.log(obj.shirt)
// console.log(obj)

// obj.belongings = [
//   'wallet',
//   'keys'
// ]

// console.log(obj.belongings)


// console.log(obj['shirt'])





// const introducer2 = (shirt, name) => {
//   const obj = {
//     name: name,
//     shirt: shirt
//   }

//   const intro = `Hi, my name is ${obj.name}, and the colour of my shirt is ${obj.shirt}`
//   return intro
// }
// console.log(introducer2('red', 'Ted'))
// console.log(introducer2('white', 'Leo'))



// const samplefunction = (prop1, prop2) => {
//   const obj = {
//     prop1: prop1,
//     prop2: prop2
//   }
//   const string = `${obj.prop1} ${obj.prop2}`
//   return string
// }

// const obj = {
//   prop1: 'test1',
//   prop2: 'test2'
// }

// const samplefunction2 = (prop1, prop2) => {
//   const string = `${obj.prop1} ${obj.prop2}`
//   return string
// }

// console.log(samplefunction2('test1','test2')) 



// console.log(fruits1[0])
// console.log(fruits1[2])
// console.log(fruits1[3])
// console.log(fruits1[4])
// console.log(fruits1[5])
// console.log(fruits1[1])
console.log('start fruits!')


const fruits1 = ['banana','apple','orange','pear','cookie','plum']


// for (let i = 0; i < fruits1.length; i++) {
//   console.log(fruits1[i])
// }


// for (const fruit of fruits1) {
//   console.log(fruit) 

// }


// let total1 = []
// for (const num of nums) {
//   // console.log(num)
//   total1.push(num * 2)

// }
// console.log(total1)



const nums = [1,2,3,4,5,6]
const double2 = (nums) => {
  let total1 = []
  for (const num of nums) {
    // console.log(num)
    total1.push(num ** 2)
  }
  return total1
}
console.log(double2([2,4,6,8,10,12]))


