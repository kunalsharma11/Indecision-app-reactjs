var nameVar = 'Kunal';
nameVar = 'Remo';
console.log('nameVar',nameVar);

//you can not redefine
let nameLet = 'Jagdish';
nameLet="Jai";
console.log('nameLet', nameLet);

//you can not re-declare
const nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = 'Kunal Sharma';
if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
