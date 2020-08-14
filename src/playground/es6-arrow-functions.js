const square = function (x){
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrowPosta = (x) => x * x;

console.log(square(8));
console.log(squareArrow(3));
console.log(squareArrowPosta(9));

//getFirstName('Ciro Gonzalez') -> 'Ciro'
// Create regular arrow function
// Create arrow function using shorthand syntax

const fullName = 'Ciro Gonzalez';
let firstName;

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName));
console.log(getFirstNameShorthand(fullName));
