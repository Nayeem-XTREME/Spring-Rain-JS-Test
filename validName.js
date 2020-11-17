// Link in index.html first

const name = prompt('Enter the name');

const parts = name.split(' ');

isValid = (value) => {

    // Check if the name has less than 2 or greater than 3 words
    if (value.length < 2 || value.length > 3) {
        console.log(`Check if the name has less than 2 or greater than 3 words`);
        return false;
    }
        

    for (x of value) {

        // If a word begins with lowercase
        if (x[0] === x[0].toLowerCase) {
            console.log('If a word begins with lowercase');
            return false;
        }
            
        
        // Check if an initials end with '.'
        else if (x.length === 2 && x[1] !== '.') {
            console.log(`Check if an initials end with '.'`);
            return false;
        }

        // If there is more character before '.'
        for (y of x) {
            if (y === '.') {
                if (x.substring(0, x.length - 1 ) > 2) {
                    console.log(`If there is more character before '.'`);
                    return false;
                }
            }
        }
    }
    return true;
}


if (isValid(parts))
    console.log(`The input name is ${name} which is valid`);
else 
    console.log(`The input name is ${name} which is invalid`);