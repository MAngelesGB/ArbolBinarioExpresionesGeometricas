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
        if(this.primero === null)
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
    
    recorrer()
    {
        let temp = this.primero;
        let arbol = null; 

        while(temp !== null)
        {
            if(temp.dato === '*' || temp.dato === '/')
            {   
                temp.hizq = temp.ant; 
                temp.hder = temp.sig;

                if(temp.ant.ant === null && temp.sig.sig === null)
                {
                    temp.sig = null; 
                    temp.ant =  null; 
                }
                else if(temp.sig.sig === null)
                {
                    temp.sig = null; 
                    temp.ant = temp.ant.ant; 
                    temp.ant.sig = temp; 
                }
                else if(temp.ant.ant === null)
                {
                    temp.ant = null;
                    temp.sig = temp.sig.sig;
                    temp.sig.ant = temp; 
                }
                else 
                {
                    temp.sig = temp.sig.sig; 
                    temp.ant = temp.ant.ant; 
                    temp.ant.sig = temp; 
                    temp.sig.ant = temp; 
                }
            }

            temp = temp.sig; 
        } 
        
        temp = this. primero; 
        
        while(temp !== null)
        {
            if(temp.dato === '+' || temp.dato === '-')
            {   
                temp.hizq = temp.ant; 
                temp.hder = temp.sig;

                if(temp.ant.ant === null && temp.sig.sig === null)
                {
                    temp.sig = null; 
                    temp.ant =  null; 
                }
                else if(temp.sig.sig === null)
                {
                    temp.sig = null; 
                    temp.ant = temp.ant.ant; 
                    temp.ant.sig = temp; 
                }
                else if(temp.ant.ant === null)
                {
                    temp.ant = null;
                    temp.sig = temp.sig.sig;
                    temp.sig.ant = temp; 
                }
                else 
                {
                    temp.sig = temp.sig.sig; 
                    temp.ant = temp.ant.ant; 
                    temp.ant.sig = temp; 
                    temp.sig.ant = temp; 
                }
                arbol = temp; 
            }

            temp = temp.sig; 
        } 
        
        this.primero = arbol; 
        console.log(this.primero);

    }
}

let expresion = '2*8+4+3-2*9/6-3*4/2/2';
let array = Array.from(expresion);
let nodo = new Nodo();
let arbol = new ArbolBinario(); 

for(let i = 0; i < array.length; i++)
{
    nodo = new Nodo(array[i]);
    arbol.agregar(nodo); 
}

arbol.recorrer();