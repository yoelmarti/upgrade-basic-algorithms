// Iteración#2

// Ejercicio 1.1

const character = {
    name: 'Jack Sparrow',
    age: 25
};

// Ejercicio 1.2 

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos')

// Ejercicio 1.3

const toy1 = {
    name: 'Buss myYear', 
    price: 19
};
const toy2 = {
    name: 'Rallo mcKing', 
    price: 29
};

console.log(toy1.price + toy2.price)

// Ejercicio 1.4

let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m', 
    basePrice: 50000, 
    finalPrice: 60000
};
const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000
};

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

