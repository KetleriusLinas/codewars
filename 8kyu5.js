function quote(fighter) {
    if (fighter.toLowerCase() === 'george saint pierre') {
        return "I am not impressed by your performance.";
} else {
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
}
};
console.log(quote('George Saint Pierre'), "I am not impressed by your performance.");
console.log(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!");
console.log('----------------------');

function greet (name, owner) {
        if (name === owner) {
            return 'Hello boss';
        } else {
            return 'Hello guest';
        }
  }
console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')

console.log('----------------------');

function repeatStr (n, s) {
    return s.repeat(n)
  }

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

function maps(x) {
    return x.map(num => num * 2)
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

console.log('----------Remove elements------------');

function removeEveryOther(arr){
    let array = [];
    for (let i = 0; i < arr.length; i+= 2) {
        array.push(arr[i]);
    }
       return array;
  }

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
  console.log(removeEveryOther([[1, 2]]), [[1, 2]]);

console.log('----------Add length------------');
