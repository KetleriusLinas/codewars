var summation = function (num) {
    sum = 0;
    // for (const n of num) {
    //     let n = num[i];
    //     sum += n;
    // }

    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
  }

  console.log(summation(1));
  console.log(summation(8));  
  
//   function summation(num) {
//     return num * (num + 1) / 2
//   }


function finalGrade (exam, projects) {
    if (exam < 0 || exam > 100 || projects < 0) {
        return `bad value`;
    }
    if (90 < exam || 10 < projects) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  }else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
  console.log(finalGrade(100, 12), '-->', '100');
  console.log(finalGrade(85, 5), '-->', '90');
  console.log(finalGrade(0, 5));
  console.log(finalGrade(-1, 5));
  
//   function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     if (exam > 75 && projects >= 5) return 90;
//     if (exam > 50 && projects >= 2) return 75;
//     return 0;
// }

function highAndLow(numbers){
    // susikuriam nauja, issplitinam ' ' i stringus atskirus,  map(Number) sudejo viska i maasyva
    const numArray = numbers.split(' ').map(Number); // pasiverciam stringa skaiciu masyvu

    const max = Math.max(...numArray);
    const min = Math.min(...numArray);

    return `${max} ${min}`; // isveda pirma max , paskui min
  }
  console.log(highAndLow('1 2 -3 4 5'));
  
//   function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

function reverseWords(str) {
    return str.split(' ')
    .reverse()
    .join(' ')
    .trim()
    .split('')
    .reverse()
    .join('')
    .trim()
  };
console.log(reverseWords('laba as krbas'));
console.log(reverseWords('apple'));

console.log('-----nepadarau--------');


function findShort(s){
    const word = s.split(' ');
    let minLength = 0;
    let minS = '';
    // for (let i = 0; i < word.length; i++) {
    //   if (word[i] < minLength)
    // }
    
        
  console.log(word);

  }
  console.log(findShort('bitcoin will take over the world'));
//   console.log(word);
console.log('--------------');

function sumMul(n,m){
  if (n <= 0 || m <= 0) {
    return 'INVALID'
  }
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;

  }
    return sum;
  }
  console.log(sumMul(2, 9));
  console.log(sumMul(3, 13));
  console.log(sumMul(4, -7));
console.log('-------is it even-------');


// function testEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   } 
// }

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");



console.log('------Will you make it?--------');
const zeroFuel = (distanceToPump, mpg, fuelLeft) => { // padariau klaida Daugiau Arba Lygu turejo but
  return mpg * fuelLeft >= distanceToPump // pirma apskaiciuoji kiek gali nuvaziuoti, paskui palygini su distancija
};

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

function hero(bullets, dragons){
  return bullets / 2 >= dragons
  }
    console.log(hero(10, 5),'->', true);
    console.log(hero(7, 4),'->', false);
    console.log(hero(4, 5),'->', false);
    console.log(hero(100, 40),'->', true);
    console.log(hero(1500, 751),'->', false);
    console.log(hero(0, 1),'->', false);

console.log('-----Drink By Profession---------');


function getDrinkByProfession (param) {
    param = param.toLowerCase();  

       if (param === 'jabroni') {
        return 'Patron Tequila';
       } 
       else if (param === 'school counselor') {
        return 'Anything with Alcohol';
       } 
       else if (param === 'programmer') {
        return 'Hipster Craft Beer';
       } 
       else if (param === 'bike gang member') {
        return 'Moonshine';
       } 
       else if (param === 'politician') {
        return 'Your tax dollars';
       } 
       else if (param === 'rapper') {
        return 'Cristal';
       } 
       else {
        return 'Beer';
       } 
      }


    console.log(getDrinkByProfession("jabrOni"), '->', "Patron Tequila");
    console.log(getDrinkByProfession("scHOOl counselor"), '->',  "Anything with Alcohol");
    console.log(getDrinkByProfession("prOgramMer"), '->', "Hipster Craft Beer");
    console.log(getDrinkByProfession("bike ganG member"));
    console.log(getDrinkByProfession("poLiTiCian"), '->', "Your tax dollars");
    console.log(getDrinkByProfession("rapper"), '->', "Cristal");
    console.log(getDrinkByProfession("pundit"), '->', "Beer");
    console.log(getDrinkByProfession("Pug"), '->', "Beer");

console.log('-----Su destytoju--- Triple trouble------');


 function tripleTrouble(one, two, three){
  let ats = ''; // konstruojam atsakyma
      for (let i = 0; i < one.length; i++)
         ats += one[i] + two[i] + three[i]; // atsakyma konstruoja one - itasis, two - itasis , three itasis sudedami ir tt.
       return ats; // atsakyma grazinam
 }
 
 console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
 console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
 console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");

 console.log('-------clock----blogai suskaiciavau--');

 function past(h, m, s){ 

      return (h * 3600 + m * 60 + s) * 1000;
 }

console.log(past(0,1,1),61000);
console.log(past(1,1,1),3661000);
console.log(past(0,0,0),0);

console.log('-------century count-------');

function century(year) {
  return Math.ceil(year / 100);
}
    console.log(century(1705), 18, 'Testing for year 1705');
    console.log(century(1900), 19, 'Testing for year 1900');
    console.log(century(1601), 17, 'Testing for year 1601');

    console.log('-------Letter count ----------');

    function strCount(str, letter){  
      let count = 0;
      for (const s of str) {
        if (s === letter) {
          count ++
        }
      }
      return count;
    }
    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);

    console.log('-------diff count ----------');

    function differenceInAges(ages){
      const min = Math.min(...ages);
      const max = Math.max(...ages);
      const diff = max - min;
      return [min, max, diff];
    }
    console.log(differenceInAges([8, 10, 62, 74, 2, 15]));
    
    console.log('-----Thinkful - Number Drills: Blue and red marbles -------');

