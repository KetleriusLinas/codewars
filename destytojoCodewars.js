function check(a, x) {
    return a.includes(x);
}
const check2 = (a,x) => a.includes(x);


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

console.log('------------------');

function positiveSum(arr) {
    return arr
    .filter(n => n >= 0) // isfiltruoja visus teigiamus skaicius ty. skaicius didesnius nei 0
    .reduce((total, n) => total + n, 0); //turi tureti defaultine reiksme 0. 
}

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0); // iskarto sumuoja (b > 0 ? b : 0) jei daugiau 0 prideda, jei maziau nei 0 prideda 0.
 }

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);


console.log('--------Array madness----------');
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript


function arrayMadness(a, b) {
    let sum1 = 0;
    for (const n of a) {
        sum1 += n ** 2;
    }
    let sum2 = 0;
    for (const n of b) {
        sum2 += n ** 3
    }
    return sum1 > sum2;
  }

  const arrayMadness2 = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 


const pow = (base, exp) => base.reduce((res,el) => res += el ** exp, 0);
const arrayMadness3 = (a, b) => pow(a, 2) > pow(b, 3); // pow kelimas laipsniu


    console.log(arrayMadness([4,5,6],[1,2,3]), true);
    console.log(arrayMadness([5,6,7],[4,5,6]), false);
    console.log(arrayMadness([4,5,6],[3,4,5]), false);
    console.log(arrayMadness([3,4,5],[2,3,4]), false);
    console.log(arrayMadness([2,3,4],[1,2,3]), false);

    console.log('--------Polish alphabet----------');

    function correctPolishLetters (string) {
        return string
        .replaceAll('ą', 'a')
        .replaceAll('ć', 'c')
        .replaceAll('ę', 'e')
        .replaceAll('ł', 'l')
        .replaceAll('ń', 'n')
        .replaceAll('ó', 'o')
        .replaceAll('ś', 's')
        .replaceAll('ź', 'z')
        .replaceAll('ż', 'z')

      }
    console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
    console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
    console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");