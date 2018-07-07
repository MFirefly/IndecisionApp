var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Maja';
console.log('nameLet', nameLet);

const nameConst = 'Zmaja';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping: var are function scoped, let and const are block-level scoped!
const fullName = 'Maja Filakovic';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log('First name:', firstName);
}

console.log('First name again:', firstName);