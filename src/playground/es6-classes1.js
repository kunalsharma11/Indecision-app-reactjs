class Person{
    constructor(name = 'Anonymous', Age = 0){
        this.name = name;
        this.Age = Age;

    }
    
    getGreeeting(){
        //return 'Hi. I am  ' +this.name + '!';
        return `Hi. I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.Age} old`;
    }

}


class Student extends Person{
    constructor(name, Age, major){
        super(name, Age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }

}

class Traveler extends Person{
    constructor(name, Age, homeLocation){
        super(name, Age);
        this.homeLocation = homeLocation;
    }

   

    getGreeeting(){
        let greeting = super.getGreeeting();
        if(this.homeLocation){
             greeting += ` I am visiting from ${this.homeLocation}`;
        }
         
         return greeting;
    }
}
const me = new Traveler('Kunal Sharma', 23, 'Bhopal');
//console.log(me.hasHomeLocation());
console.log(me.getGreeeting());
//console.log(me.getDescription());
//console.log(me.getGreeeting());
const other = new Traveler('Ramesh' , 45);
console.log(other.getGreeeting());