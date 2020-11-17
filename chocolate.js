// Link in index.html first
// Need a slight fix

const money = prompt('Enter the money Arun have to buy chocolate');
const price = prompt('Enter the price of each chocolate');

countChocolate = (x, y) => {
    let total = x / y;

    let wrapper = total / 3;

    // Need a loop here
    let wrapperLeft = total % 3;
    total += wrapper;

    return total;
}

console.log(`Arun can eat ${countChocolate(money, price)} no. of chocolate`);