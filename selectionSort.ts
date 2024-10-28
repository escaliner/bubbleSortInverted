import {cargar, escribirEnUnaLinea, comparar, intercambiar} from './helpers'

function seleccion(arreglo: number[], cantidad: number) {
    let i: number, j: number, posicion: number;
    for (i = 0; i < (cantidad - 1); i++) {
        posicion = i;
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j;
            }
        }
        intercambiar(arreglo, i, posicion);
    }
}


let lim: number = 10;
let a: number[] = new Array(lim);  
cargar(a, lim, 100); 
escribirEnUnaLinea(a, lim);
seleccion(a, lim); 
escribirEnUnaLinea(a, lim);



/*Implemente un algoritmo de
ordenamiento con el método Bubble
Sort, para que ordene un arreglo de
longitud N en orden descendente.
*/

function seleccionDescendente(arreglo: number[], cantidad: number) {
    let i: number, j: number, posicion: number;
    for (i = 0; i < (cantidad - 1); i++) {
        posicion = i;
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == -1) {  //cambio el 1 por el -1 para q lo haga descendente (en vez de buscar el elemento mas chico, busco el mas grande)
                posicion = j;
            }
        }
        intercambiar(arreglo, i, posicion);
    }
}

