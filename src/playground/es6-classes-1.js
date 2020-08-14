class Person {
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        //return this.name + ' is ' + this.age + ' years old';
        return `${this.name} is ${this.age} years old.`
    }
}


class Student extends Person {
    constructor(name,age,major){
        super(name,age)
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        
        if(this.hasMajor()){
            description +=  ` Their major is ${this.major}`
        }

        return description;
    }
}

const me = new Student('Ciro Gonzalez',27, 'Computer Science');

console.log(me)
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(me.getGretting());

class Traveler extends Person {
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    getGretting(){
        if (this.location){
            return `Hi. I am ${this.name}. I'm visiting from ${this.location}`
        }else{
            return `Hi. I am ${this.name}.`
        }
    }
}

const traveler = new Traveler('Travelcito Rodriguez', 27, 'Buenos Aires');

console.log(traveler.getGretting());