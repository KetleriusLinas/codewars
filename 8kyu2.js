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