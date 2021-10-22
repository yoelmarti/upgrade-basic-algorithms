// Iteración#3

// Ejercicio 1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let avengerHulk = avengers[0];

console.log(avengerHulk);

//Ejercicio 1.2


let cambiarPrimerElemento = function(arr){
    arr.splice(0,1, 'IRON MAN');
    console.log(arr);
}

cambiarPrimerElemento(avengers);

//Ejercicio 1.3

let mostrarNumElementos = function(arr){
    console.log(arr.length);
};

mostrarNumElementos(avengers);

// Ejercicio 1.4

let añadir2ElementosMostrarUltimo = function(){
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
    rickAndMortyCharacters.push('Morty', 'Summer');
    let indexSummer = rickAndMortyCharacters.indexOf('Summer');
    console.log(rickAndMortyCharacters[indexSummer]);
}

añadir2ElementosMostrarUltimo();

// Ejercicio 1.5

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];


let muestraPrimeroYUltimo = function(arr){
    arr.pop();
    console.log(arr[0]);
    arr.reverse();
    console.log(arr[0]);
};

muestraPrimeroYUltimo(rickAndMortyCharacters);

// Ejercicio 1.6

let muestraArraySinSegundoElemento = function(arr){
    arr.splice(1,1);
    console.log(arr);
}

muestraArraySinSegundoElemento(rickAndMortyCharacters);
