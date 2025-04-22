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