var nameVar = 'Cirolele'
nameVar = 'Tony';
console.log('nameVar', nameVar)

let nameLet = 'CiroGG';
nameLet = 'CiroGG RENAMED'
console.log('nameLet',nameLet);

const nameConst = 'CiroGG CONST';
//nameConst = 'CiroGG CONST RENAMED' NO SE PUEDE
console.log('nameConst',nameConst);

// Block scoping

const fullName = 'Ciro Gonzalez';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);