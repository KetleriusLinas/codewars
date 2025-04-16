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
  