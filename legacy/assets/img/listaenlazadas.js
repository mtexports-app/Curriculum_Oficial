
//In nodo de lista en javascrip contiene dos datos, un dato (valor) y un apuntador (siguiente °null es como finalizacion del nodo)

//Implementacion de un nodo de lista en javascript
class Nodolista {

    constructor (dato){

        this.dato = dato
        this.siguiente = null
    }
}

//Implementacion de una lista con un contructor en Javascrip

//Si el nodo de cabecera no es pasado entonces la cabecera se inicializa a nulo

class Listaenlazada {

    constructor(cabecera = null) { 

        this.cabecera = cabecera

    }
}


//Se tiene que hacer los nodos y apuntadores

let nodo1 = new Nodolista(1)
let nodo2 = new Nodolista(4)
nodo1.siguiente = nodo2

let lista = new Listaenlazada(nodo1)

console.log (lista.cabecera.siguiente.dato)
