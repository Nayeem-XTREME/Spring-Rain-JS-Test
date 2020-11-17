// Link in index.html first

const input = 'dog';

for (let i = 0; i < input.length; i++) {

    let output = '';

    for (let j = i; j < input.length; j++) {
        output += input[j];
        console.log(output);
    }

}