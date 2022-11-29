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

        while(temp !== null)
        {
            if(temp.dato === '*' || temp.dato === '/')
            {   
                this._recorrer(temp); 
            }

            temp = temp.sig; 
        } 
        
        temp = this.primero; 
        
        while(temp !== null)
        {
            if(temp.dato === '+' || temp.dato === '-')
            {   
                this._recorrer(temp); 
                this.primero = temp; 
            }
            temp = temp.sig; 
        }
        
    }

    _recorrer(temp)
    {
        temp.hizq = temp.ant; 
        temp.hder = temp.sig;

        if(temp.ant.ant === null && temp.sig.sig === null)
        {
            temp.sig = null; 
            temp.ant =  null; 
        }
        else if(temp.ant.ant === null)
        {
            temp.ant = null;
            temp.sig = temp.sig.sig;
            temp.sig.ant = temp; 
        }
        else if(temp.sig.sig === null)
        {
            temp.sig = null; 
            temp.ant = temp.ant.ant; 
            temp.ant.sig = temp; 
        }
        else 
        {
            temp.sig = temp.sig.sig; 
            temp.ant = temp.ant.ant; 
            temp.ant.sig = temp; 
            temp.sig.ant = temp; 
        }
    }

    preOrder() 
    {
        if(this.primero === null) 
            return null; 
        else 
            this._preOrder(this.primero); 
        return this.pre;
    }

    _preOrder(nodox) 
    {
        this.pre += `${nodox.dato}`; 
        if(nodox.hizq !== null)
            this._preOrder(nodox.hizq);
        if(nodox.hder !== null) 
            this._preOrder(nodox.hder);
    }

    postOrder() 
    {
        if(this.primero === null) 
            return null; 
        else 
            this._postOrder(this.primero); 
        return this.post;
    }

    _postOrder(nodox) 
    {
        if(nodox.hizq !== null)
            this._postOrder(nodox.hizq);
        if(nodox.hder !== null) 
            this._postOrder(nodox.hder);
        this.post += `${nodox.dato}`; 
    }

    lifo(preOrder)
    {
        let resultado = []; 
        let dato1 = 0; 
        let dato2 = 0; 
        let res = 0; 
        let opc = ""; 
        for(let i = preOrder.length-1; i >= 0; i--)
        {
            if((preOrder[i] === '*') || (preOrder[i] === '/') || (preOrder[i] === '+') || (preOrder[i] === '-'))
            {
                dato1 = resultado.pop(); 
                dato2 = resultado.pop(); 
                opc = preOrder[i]; 
            
                switch (opc) {
                    case '+':
                        res = dato1 + dato2; 
                    break;
        
                    case '-':
                        res = dato1 - dato2; 
                    break;
        
                    case '*':
                        res = dato1 * dato2; 
                    break;
        
                    case '/':
                        res = dato1 / dato2; 
                    break;
                }

                resultado.push(res); 

            }
            else
            {
                resultado.push(parseInt(preOrder[i])); 
            }
    
        }
        return resultado[0]; 
    }

    fifo(postOrder)
    {
        let resultado = []; 
        let dato1 = 0; 
        let dato2 = 0; 
        let res = 0; 
        let opc = ""; 

        for(let i = 0; i < postOrder.length; i++)
        {
            if((postOrder[i] === '*') || (postOrder[i] === '/') || (postOrder[i] === '+') || (postOrder[i] === '-'))
            {
                dato1 = resultado.pop(); 
                dato2 = resultado.pop(); 
                opc = postOrder[i]; 

                switch (opc) {
                    case '+':
                        res = dato2 + dato1; 
                    break;
        
                    case '-':
                        res = dato2 - dato1; 
                    break;
        
                    case '*':
                        res = dato2 * dato1; 
                    break;
        
                    case '/':
                        res = dato2 / dato1; 
                    break;
                }

                resultado.push(res); 
            }
            else
            {
                resultado.push(parseInt(postOrder[i])); 
            }
            
        }
        return resultado[0]; 
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
console.log('preOrder', arbol.preOrder()); 
console.log('postOrder', arbol.postOrder()); 
console.log('lifo', arbol.lifo(Array.from(arbol.preOrder())));  
console.log('fifo', arbol.fifo(Array.from(arbol.postOrder()))); 