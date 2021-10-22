// Iteración#6

//Ejercicio 1.1

let contarHasta9 = function(){
    for(let i=0; i<10; i++){
        console.log(i);
    }
}

contarHasta9();

//Ejercicio 1.2

let mostrarPares = function(){
    for (let i=0; i<10; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

mostrarPares();

let contarOvejas = function(){
    for(let i=0; i<=10; i++){
        i===10 ? console.log('Dormido!') : console.log('Oveja ' + i + ' Intentando dormir...')
    }
}

contarOvejas();
