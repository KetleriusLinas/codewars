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

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}
console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')

console.log('----------------------');

function repeatStr(n, s) {
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

function removeEveryOther(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 2) {
    array.push(arr[i]);
  }
  return array;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);

console.log('----------Calculate average------------');

function findAverage(array) {
  let avg = 0;
  if (array.length === 0) {
    return 0;
  }

  for (const arr of array) {
    avg += arr;
  }
  return avg / array.length
}

console.log(findAverage([1, 1, 1], 1));
console.log(findAverage([1, 2, 3], 2));
console.log(findAverage([1, 2, 3, 4], 2.5));

console.log('----------Add length-----------');

function arrayPlusArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  let arr4 = 0;
  for (const a of arr3) {
    arr4 += a;
  }
  return arr4;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);


console.log('---------------------');

function howMuchILoveYou(nbPetals) {
  if (nbPetals >= 7) {
    return "I love you";
  } if (3 >= nbPetals) {
    return "a lot"
  } else (3 > nbPetals < 7)
  return "not at all";
}

console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")

console.log('---------------------');

function sum(numbers) {
  if (typeof numbers == !isNaN) {
    return 0;
  }
  let sumNum = 0;
  for (const s of numbers) {
    sumNum += s;
  }
  return sumNum;
}
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);

console.log('---------------------');

// const p7 = p.filter( n => n < 7);
// console.log(p7);


// const arr1 = arr.filter(n => n > 2);


function binaryCleaner(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      arr1.push(arr[i]);
    } else {
      arr2.push(i);
    }
  }
  return [arr1, arr2];
}
// console.log(arr1);
// console.log(arr2);

console.log(binaryCleaner([0, 1, 1, 2, 0]), "[ 0, 1, 1, 0 ], [ 3 ]")
console.log(binaryCleaner([2, 2, 0]), ' [ 0 ], [ 0, 1 ]');
console.log(binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1]), '[ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ]');

console.log('---------------------');

function twoHighest(arr) {
  return
}

console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])


console.log('---------------------');

function greet(name) {
  if (isFinite(name) === true) {
    return null;
  }
  if (name === name) {
    return `Hello ${name}`
  }

}
console.log(greet("Niks"), "hello Niks!", "try again");
console.log(greet(null), null, "try again");


console.log('---------------------');

function mergeArrays(arr1, arr2) {
  const arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  return [...new Set(arr3)]

}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]), '[1,2,3,4,5,6,7,8]');
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), '[1,2,3,4,5,6,7,8,9,10]');
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), '[1,2,3,4,5,7,9,10,11,12]');

console.log('---------------------');

function solution(n) {
  return Math.round(n * 2) / 2;
}

console.log(solution(4.2), 4);
console.log(solution(4.4), 4.5);
console.log(solution(4.6), 4.5);

console.log('---------------------');

function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  } else if (score >= 0.9) {
    return "A";
  } else if (score >= 0.8) {
    return "B";
  } else if (score >= 0.7) {
    return "C";
  } else if (score >= 0.6) {
    return "D";
  }
}
console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");
console.log(grader(0.5), "C");
console.log(grader(0.4), "A");
