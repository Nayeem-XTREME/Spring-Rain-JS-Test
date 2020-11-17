// Link in index.html first

const number = 254688768534;

const value = number.toString();

isEven = (num) => {
    return (num % 2) === 0 ? true : false;
}

let newArr = value[0];

for (let i = 0, j = i+1; j < value.length; i++, j++) {
    if (isEven(parseInt(value[i])) && isEven(parseInt(value[j]))) {
        newArr += '-' + value[j];
    }
    else {
        newArr += value[j];
    }
}

console.log(`${number} is formatted into ${newArr}`);