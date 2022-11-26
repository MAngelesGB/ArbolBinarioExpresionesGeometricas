class Nodo{
    constructor(dato)
    {
        this.dato = dato; 
        this.hizq = null; 
        this.hder = null; 
        this.sig = null; 
        this.ant = null; 
    }
}

class ArbolBinario{
    constructor()
    {
        this.primero = null;
        this.ultimo = null; 
    }

    agregar(nuevo)
    {
        if(!this.primero)
        {
            this.primero = nuevo; 
            this.ultimo = nuevo; 
        }
        else
        {
            this.ultimo.sig=nuevo;
            nuevo.ant=this.ultimo;
            this.ultimo=nuevo;
        }               
    } 
}

let expresion = '4-2+3*5-8*3/6';
let array = Array.from(expresion);
let nodo = new Nodo();
let arbol = new ArbolBinario(); 

for(let i = 0; i < array.length; i++)
{
    nodo = new Nodo(array[i]);
    arbol.agregar(nodo); 
}

console.log(arbol.listar()); 