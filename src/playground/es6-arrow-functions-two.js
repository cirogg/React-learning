// ES5

const add = function (a,b){
    console.log(arguments);
    return a+b;
};
//console.log(add(55,1));

//Arrow no tiene arguments, no se puede acceder.

//const add2 = (a,b) => {
//    console.log(arguments);
//   return a+b;
//};

const user = {
    name: 'Ciro',
    citites: ['Buenos Aires', 'New York', 'Dublin'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.citites);

        this.citites.forEach(function (city){
            console.log(this.name + ' has lived in ' + city);
        })
    }
}

//user.printPlacesLived();

const user2 = {
    name: 'Ciro',
    citites: ['Buenos Aires', 'New York', 'Dublin'],
    printPlacesLived(){
        return this.citites.map((city)=>this.name + ' has lived in ' + city);        

        //this.citites.forEach(city => {
        //    console.log(this.name + ' has lived in ' + city);
        //});
    }
}

console.log(user2.printPlacesLived());

// Challenge 

const multiplier = {
    //numbers - Array of unmbers
    //multipliyBy - Single number
    //Get a new array with the number * multiplyBy
    //multiply - return a new array - Using .map()

    numbers: [1,2,3],
    multiplyBy: 5,
    multiply(){return this.numbers.map((number) => number * this.multiplyBy)}
}

console.log(multiplier.multiply());