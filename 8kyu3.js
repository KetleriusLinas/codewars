console.log('-----Area or Perimeter------');
const areaOrPerimeter = function(l , w) {
    if (l === w) { 
        return w * w; 
    } else {
        return (l + w) * 2;
    }
  };
  console.log(areaOrPerimeter(3,  3),  9);
  console.log(areaOrPerimeter(6, 10), 32);

console.log('-----counting sheep-- Nesigavo----');

function countSheeps(sheep) {
    let count = 0;
    for (const s of sheep) {
    if (typeof s === true) {
        count++;
    }
}
        return count;
  }

  console.log(countSheeps([[undefined], 0, true], true));
  console.log(countSheeps([[null], 0]));
  console.log(countSheeps([[false], 0]));
  console.log(countSheeps([[true], 1]));
  console.log(countSheeps([[undefined,null,false,true], 1]));

console.log('--------------Will there be enough space?-----------------');
function enough(cap, on, wait) {
    const result = cap - (on + wait);
    if (result < 0) {
        return Math.abs(result);
    } else {
        return 0;
    }
}
    console.log(enough(10, 5, 5), 0);
    console.log(enough(100, 60, 50), 10);
    console.log(enough(20, 5, 5), 0);

console.log('--------------Reversed words-----------------');

    function reverseWords(str){ // sakinius skaito nuo galo i prieki.
        const s = str.split(' ')
        .reverse()
        .join(' ') // sujungia teksta tarpais
        return s;
      }
    console.log(reverseWords("hello world!"                 ,  "world! hello"))
    console.log(reverseWords("yoda doesn't speak like this" ,  "this like speak doesn't yoda"))
    console.log(reverseWords("foobar"                       ,  "foobar"))

console.log('-----------------Add Length-------nepasidariau--------------');
function addLength(str) {
    const s = str.split(' '); // masyvas -pasivercia i
    let lengthCount = 0;

for (let i = 0; i < s.length; i++)  {
    lengthCount += s[i]
    // console.log(s[i].length);

}

        // console.log(lengthCount.length);
        // console.log(s);
        
    return s.length
    
    
  }

console.log(addLength ("You need to return an array. Did you log to the console instead?"));
console.log(addLength ('mano vardas bigB'));

console.log('-------------Third Angle of a Triangle------------------');

function otherAngle(a, b) {

    return 180 - (a + b);
  }
  console.log(otherAngle(30, 60), 90);
  console.log(otherAngle(60, 60), 60);
  console.log(otherAngle(43, 78), 59);
  console.log(otherAngle(10, 20), 150);

console.log('--------------Switch it Up!-----------------');
function switchItUp(number){ 
switch (number) {
    case 1:
        return 'One';
    case 2:
        return 'Two';
    case 3:
        return 'Three';
    case 4:
        return 'Four';
    case 5:
        return 'Five';
    case 6:            
        return 'Six';
    case 7:             
        return 'Seven';
    case 8:  
        return 'Eight';     
    case 9:
        return 'Nine'
    default:
        return 'Zero'
}       
}

console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");
console.log(switchItUp(12),"Five");

console.log('---------------- "or"Logical Operator---------------');

// function xor(a, b) {
//     if (a === b)
//         return false;
//   } if (a > b || a < b) {
//     return true;
//   };

  const xor = (a, b) => a === b ? false : true;

 console.log(xor(false, false), false);
 console.log(xor(true, false), true);
 console.log(xor(false, true), true);
 console.log(xor(true, true), false);

console.log('----------------Capitalization and Mutability---------------');
function capitalizeWord(word) {
    const firstLetter = word[0].toUpperCase();  
    const restName = word.slice(1);       
    const newName = firstLetter + restName;
  return newName;
}
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('glasswear'), 'Glasswear');

console.log('---------------Find the position!----------------');

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
  }
  console.log(position("a"),'-->', "Position of alphabet: 1");
  console.log(position("z"),'-->', "Position of alphabet: 26");
  console.log(position("e"),'-->', "Position of alphabet: 5");


  const setAlarm =(employed, vacation) => employed <= vacation ? false : true;

  console.log(setAlarm(true, true),  false,"Should be false.");
  console.log(setAlarm(false,true),  false, "Should be false.");
  console.log(setAlarm(true, false), true,"Should be true.");


console.log('--------------Short Long Short----------------');

  function solution(a, b){
    if (a.length < b.length) {
      return a + b + a;
    } else {
    return b + a + b;
  }
  }

  console.log(solution('45', '1'), '1451');
  console.log(solution('13', '200'), '1320013');
  console.log(solution('Soon', 'Me'), 'MeSoonMe');
  console.log(solution('U', 'False'), 'UFalseU');