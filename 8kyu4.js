console.log('----------Six toasts---------');

// function sixToast(num) {
//     if (num === 6)
//         return 0;
//     if (num > 6)
//         return num - 6;
//     if (num < 6)
//         return 6 - num;
//   } 
  function sixToast(num) {
    return Math.abs(num-6)
  }
console.log(sixToast(6), 0);
console.log(sixToast(17), 11);
console.log(sixToast(3), 3);

console.log('----------Get the mean of an array---------');

// function getAverage(marks){
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i]
//     }
//     return Math.floor(sum / marks.length)
//   }
  function getAverage (marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
  }
console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);


console.log('----------Coding 3min : Jumping Dutch act---------');

function sc(floor){
    const a = 'Aa~ ';
    const b = 'Aa!';
    const c = 'Pa! ';

    if (floor < 2){
        return '';
    }
    if (floor === 2) {
    return a + c + b;
    } 
    if (floor <= 6) {
        return a.repeat(floor - 1) + c + b;
    }
    if (floor > 6) {
        return a.repeat(floor - 1) + 'Pa!'
    }
  }
console.log(sc(2),'-->', "Aa~ Pa! Aa!");  
console.log(sc(6),'-->', "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"); 
console.log(sc(7),'-->', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!");
console.log(sc(1),'-->', "", "good luck!"); 
console.log(sc(-1),'-->', "", "good luck!");

console.log('---------Push a hash/an object into array--------');

const items = [];
const item = {a: "b", c: "d"};
items.push(item);

console.log(items);

console.log('---------Max Headroom and JavaScript style--------');

function getMax1(){
  const max = {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2(){
    const max = {
     name: 'Max Headroom'
    }
    return max;
  }
console.log(getMax2() == getMax1());

console.log('---Training JS #5: Basic data types--Object---');

// function animal(obj){
//     return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
//   }
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

console.log(animal({name: "dog", legs: 4, color: "white"}));
console.log(animal({ name: "cock", legs: 2, color: "red" }));
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }));

console.log(`---If you can't sleep, just count sheep!!---`);

const countSheep = function (num){
    let result = '';

    for (let i = 1; i <= num; i++) {
        result += i + ' sheep...';
    }if (num === 0) {
        return '';
    }
    return result;
  }
console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");

console.log(`--------duty free-----------`);

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * discount / 100));
}
console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);  


console.log(`------Pabaigti-------------`);

function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  for (let i = 0; i <= arr1; i++){
      sum1 += i;
  }
  console.log(sum1)
  // return sum;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);


console.log(`------count monkeys-------------`);

function monkeyCount(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) { // n is a number so n.length netinka'
      arr.push(i);
    }
    return arr;
  }

  
  console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
  console.log((monkeyCount(3)), [1, 2, 3]);
  console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(`----------------------`);

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);


console.log(`----------------------`);

function calculator(a,b,sign){
  if (typeof a !== 'number' || typeof b !== 'number')
    return 'unknown value';
  let s = '';
  switch(sign) {
    case '+': 
      s = a + b;
      break;
      case '-': 
      s = a - b;
      break;
      case '*': 
      s = a * b;
      break;
      case '/': 
      s = a / b;
      break;
    default:
      s = 'unknown value';
  }
  return s;
};

console.log(calculator(1,2, "+",  3));
console.log(calculator(1,2, "-", -1));
console.log(calculator(3,5, "*", 15));
console.log(calculator(6, "h", "*", "unknown value"));

console.log(`----------------------`);

function getASCII(c){
  return c.charCodeAt();
}
console.log(getASCII('A'),65)
console.log(getASCII(' '),32)
console.log(getASCII('!'),33)

console.log(`----------------------`);

function betterThanAverage(classPoints, yourPoints) {
    let avg = 0;
    for (let i = 0; i < classPoints.length; i++){
      avg += classPoints[i];
    }
    const result = avg / classPoints.length;
    return result < yourPoints;
}

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
// }
console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
