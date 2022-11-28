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
        this.pre = "";
        this.post = ""; 
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
    }

    preOrder() 
    {
        let res = ""; 
        if(this.primero === null) 
            return null; 
        else 
            res = this._preOrder(this.primero); 
        return res;
    }

    _preOrder(nodox) 
    {
        this.pre += `${nodox.dato} `; 
        if(nodox.hizq !== null)
            this._preOrder(nodox.hizq);
        if(nodox.hder !== null) 
            this._preOrder(nodox.hder);
        return this.pre;
    }

    postOrder() 
    {
        let res = ""; 
        if(this.primero === null) 
            return null; 
        else 
            res = this._postOrder(this.primero); 
        return res;
    }

    _postOrder(nodox) 
    {
        if(nodox.hizq !== null)
            this._postOrder(nodox.hizq);
        if(nodox.hder !== null) 
            this._postOrder(nodox.hder);
        this.post += `${nodox.dato} `; 
        return this.post;
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

arbol.recorrer();
console.log('preOrder', arbol.preOrder()); 
console.log('postOrder', arbol.postOrder()); 