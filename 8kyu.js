// return the day 

function whatday(num) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (num <= 0 || num > 7 ) {
            return 'Pick between 1 to 7';
        } else {
            return week[num - 1]; // pastume per viena indexa
        }
    }

console.log(whatday());
console.log('labas');
