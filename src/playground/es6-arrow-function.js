
const add = (a,b) => {
    return a+b;
};
console.log(add(55,5, 100));


const user = {
    name: 'Kunal',
    cities: ['Shivpuri', 'Kota', 'Bhopal', 'Montreal'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lives in ' +city);
    }
};
console.log(user.printPlacesLived());
//user.loopPlacesLived();
const multiplier = {
    numbers: [1,6],
    multiplyBy : 2,

    doMultiplication(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};
console.log(multiplier.doMultiplication());