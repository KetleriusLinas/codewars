// return the day 

function whatDay(num) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (num <= 0 || num > 7 ) {
            return 'Pick between 1 to 7';
        } else {
            return week[num - 1]; // pastume per viena indexa
        }
    }

console.log(whatDay());
console.log('labas');


console.log('--------Sum of possitive---------');
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    };
    return sum;

 };

 console.log(positiveSum([2, 4, 6, 8, 10]));
 console.log(positiveSum([2, -4, 6, -8, 10]));
 console.log(positiveSum([2, 4, -6, 8, -10]));

 // naujove! 
//  function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
//   }
//   console.log(positiveSum([2, 44, 6, 88, 10]));

console.log('--------basic data tyoes: Object- NESIGAVO--------');

// const animal = obj => {name: 'dog', legs: 4, color: 'white'};


// // function animal(obj){
// //   let animal = {name:"dog",legs:4,color:"white"}
// //     };
// //     return obj;;

//   console.log(animal());
//   console.log(animal());  
//   console.log(animal());

  
//   function animal1(obj){
//     const animal = {
//       name: 'cock',
//       legs: 2,
//       color: 'red',
//     };
//     return `This ${animal.color} ${animal.name} has ${animal.legs} legs. `;
//   };
//   console.log(animal1())

//   function animal2(obj){
//     const animal = {
//       name: 'rabbit',
//       legs: 4,
//       color: 'gray',
//     };
//     return `This ${animal.color} ${animal.name} has ${animal.legs} legs. `;
//   };
//   console.log(animal2())

// //   let dog = { name: "dog", legs: 4, color: "white" };
// //   let dog = { name: "dog", legs: 4, color: "white" };
// //   let dog = { name: "dog", legs: 4, color: "white" };
// // let dog = { name: "dog", legs: 4, color: "white" };

//   function animal (obj) {
//     const dog = { name: "dog", legs: 4, color: "white" };

//     return `This ${obj.color} ${obj.name} has ${obj.legs} legs. `
//   }
//   console.log(animal(dog));

//   function animal1 (obj) {
//     const cock = { name: "cock", legs: 2, color: "red" };

//     return `This ${cock.color} ${cock.name} has ${cock.legs} legs. `
//   }

//   function animal2 (obj) {
//     const rabbit = { name: "rabbit", legs: 4, color: "gray" };

//     return `This ${rabbit.color} ${rabbit.name} has ${rabbit.legs} legs. `
//   }

// function areYouPlayingBanjo(name) {
//     if(name[0] === 'R' || name[0] === 'r'){
//         return name + 'plays banjo';
//     } else {
//       return name + 'does not plays banjo';
//     }
//   }
//   console.log(areYouPlayingBanjo());


function problem(x){ 
    if(x !== 'number') {
      return 'Error';
    }
    
  return (x * 50) + 6;
  }
  console.log(problem());

console.log('--------------------------');

  function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'Kids drink toddy.';
  } else if (old < 18) {
        return `Teens drink coke.`;
  } else if (old < 21) {
        return `Young adults drink beer.`;
  } else {
    return `Adults drink whisky`;
  }
}
console.log(peopleWithAgeDrink(22));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(18));

console.log('--------------------------');
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 == 0) { 
        return number * 8;
    } else {
        return number * 9;
    }
}
console.log(simpleMultiplication(2), '--->', '16');
console.log(simpleMultiplication(1), '--->', '9');
// console.log(simpleMultiplication(8), '--->', '64');
// console.log(simpleMultiplication(4), '--->', '32');
// console.log(simpleMultiplication(5), '--->', '45');

console.log('--------------------------');

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
} if  (number % 2 == 1 || isNaN) {
    return 'Odd';
}
}
console.log(evenOrOdd(undefined));

console.log('---------clock #2-----------------');
function past(h, m, s){ 
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    result = hours * minutes * seconds
        return result;
  }
  console.log(past(0, 2 ,1));
  console.log('-----------planetName---------------');
  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

console.log(getPlanetName(2));
console.log(getPlanetName(5));
console.log(getPlanetName(3));

console.log('-----------quarterOfTheYear---------------');

const quarterOf = (month) => {
    if(month <= 3) {
        return `${month} is 1 quarter of the year.`
    } else if (3 < month && month <= 6) {
        return `${month} is 2 quarter of the year.`
    } else if (6 < month && month <= 9) {
        return `${month} is 3 quarter of the year.`
    } else {
        return `${month} is 4 quarter of the year.`
    }
  }
  console.log(quarterOf(3));
  console.log(quarterOf(8));
  console.log(quarterOf(11));
  console.log('-----------isBetween--------nepadariau-------');

  function between(a, b) {
    // your code here
  }
  console.log('-----------if else operator---------------');

  // Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n){
    if (n < 5) {
      return n * 100;
    }    
    if (n <= 5 || n < 10) {
      return n * 95;
    }
    if (n >= 10) {
      return n * 90;
    }
}
console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
// console.log(saleHotdogs(5));
// console.log(saleHotdogs(9));
// console.log(saleHotdogs(10));
// console.log(saleHotdogs(100));

console.log('-----------loop statment--------nekazka-------');


function pickIt(arr) {
  let odd = [];
  let even = [];

  // Loop through the array and check each element
  for (let num of arr) {
      if (num % 2 === 0) {
          even.push(num);  // Push even numbers into 'even' array
      } else {
          odd.push(num);   // Push odd numbers into 'odd' array
      }
  }

  return [odd, even];
}

// console.log(pickIt([1]));        
// console.log(pickIt([1, 2]));     
console.log(pickIt([1, 2, 3, 8]));
// console.log(pickIt([10, 20, 30]));

function firstToLast(str,c){
  //coding here..
  
}

console.log(firstToLast('ababc', 'a'));
console.log(firstToLast('ababc', 'c'));
console.log(firstToLast('ababc', 'd'));
console.log('--------------------------');

const stringToNumber = function(str){

  return parseInt(str);
}

console.log('1234');
console.log('605');
console.log('1405');
console.log('-7');

console.log('------------SPRESTI--------------');

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  // const parts = numbers.slice(0, 3);
   const a = numbers.toString();
   const parts = numbers.split(number[2]);
   const antraDalis = parts[1].split(createPhoneNumber[2]);
// console.log(antraDalis);
    return numbers;
}


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

// function correctSentence (text) {
//   const parts = text.split(': '); // atskiriame teksta nuo sios vietos
//   const names = parts[1] // isivedam antra teksto dali i kintamaji
//       .slice(0, -1)           // , nupjaunam (taska), 
//       .toLowerCase()          // paverciam viska mazosiom raidemm
//       .split(', ');           // atskiriam ( per kableli, tarpa). Jau teksta esam pasiruose
//   console.log(parts);
//   console.log(names);
console.log('------------alphabet--------------');

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let sum = 0;
// function alphabetPosition(text) {
//   for (i = 0; i < alphabet.length - 1; i++); 
//     // if (text === alphabet[i]);
//     const count = alphabet[i];
//     sum += count;
//   return text;
// }
// console.log(alphabet.length);
// console.log(sum);
// console.log(alphabetPosition(9));


// for (i = 0; i < alphabet.length - 1; i++); 
// // if (text === alphabet[i]);
// const count = alphabet[i];
// sum += count;

// console.log(sum)

// sukurti cikla kuris tikrins kiekviena masyvo simboli
// patikrinti ar tekste gauta raide yra mazoji ar didzioji
// jei tai raide patikrinti jos pozicija abeceleje
// jei tai neraide ignoruoti ja
// sujungti visus rezultatus su tarpais.

function alphabetPosition(text) {
  return text;
}

function alphabetPosition(text) {
  return text
      .toLowerCase()                   // Convert the string to lowercase
      .split('')                        // Split the string into an array of characters
      .filter(char => /[a-z]/.test(char)) // Filter out any non-alphabet characters
      .map(char => char.charCodeAt(0) - 96)  // Convert each letter to its alphabet position
      .join(' ');                      // Join the positions with a space
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));