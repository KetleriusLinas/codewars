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

    function reverseWords(str){
        const s = str.split(' ');
        let result = '';
            for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
        console.log(s);
        
    }
        return result // reverse those words
      }
    console.log(reverseWords("hello world!"                 ,  "world! hello"))
    console.log(reverseWords("yoda doesn't speak like this" ,  "this like speak doesn't yoda"))
    console.log(reverseWords("foobar"                       ,  "foobar"))



//     function stringReverse(text) {
//         if (typeof text !== 'string') { // patikrinimas ar string tipas, jei ne isveda netinkama tipa
//             return 'Reikalinga string tipo reiksme'
//         }
//     let result = ' ';
//         result.split(' ');
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     return result;
// }
// console.log(stringReverse("hello world!"                 ,  "world! hello"))
// console.log(stringReverse("yoda doesn't speak like this" ,  "this like speak doesn't yoda"))
// console.log(stringReverse("foobar"                       ,  "foobar"))
