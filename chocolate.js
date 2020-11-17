// Link in index.html first

const money = parseInt(prompt('Enter the money Arun have to buy chocolate'));
const price = parseInt(prompt('Enter the price of each chocolate'));

countChocolate = (x, y) => {

    let chocolate = parseInt(x / y);
    let wrapperRem = 0;

    let sum = chocolate;

    while (true) {
        let curr = chocolate + wrapperRem;
        chocolate = parseInt(curr / 3);
        wrapperRem = curr % 3;

        sum += chocolate;

        if (chocolate === 0)
            break;
    }

    return sum;

}

console.log(`Arun can eat ${countChocolate(money, price)} no. of chocolate`);