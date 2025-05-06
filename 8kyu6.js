function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/g,'awesome');
}
console.log(filterWords("You're Bad! timmy!"),"You're awesome! timmy!");
console.log(filterWords("You're MEAN! timmy!"),"You're awesome! timmy!");

// var replaceDots = function(str) {
//   return str.replaceALL(/./, '-');
// }

function sum(...s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += s[i];
  }
  return count;
}
console.log(sum(1, 2), 3 );
console.log(sum(5, 7, 9), 21 );
console.log(sum(12, 1, 1, 1, 1), 16 );

console.log('--------------------')
reverse = function(array) {
  let rev = [];
  for (let i = array.length - 1; i >= 0; i--) {
    rev.push(array[i]);

  }
  return rev;
}

console.log( reverse([1,2,3]), [3,2,1] )
console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )

console.log('--------------------')

function findShort(s){
  const words = s.split(' ');
  let word = [];
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    word.push(words[i].length);
    
  }
  console.log(word);
  
  return Math.min(...word);
}


function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("Let's travel abroad shall we"), 2);

console.log('--------------------')

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
  // return s.replaceAll(/[0-9]/g, "");
}
console.log(removeExclamationMarks("Hello! World!!"), "Hello World");
// console.log(removeExclamationMarks("Hello45 World52"), "Hello World");

console.log('--------debbugin------------')

var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

console.log(sortArray('12345'),'-->', '12345');
console.log(sortArray('54321'),'-->', '12345');
console.log(sortArray('34251'),'-->', '12345');
