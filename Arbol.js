class Nodo{
    constructor(dato){
        this.value = dato
        this.izq = null
        this.der=null
    }
}
class Arbol{
    constructor(){
        this.raiz=null
    }
    insert(value){
       let nodo=new Nodo(value)
        if(!this.raiz){
            this.raiz=nodo
        }else{
            this.agregar(this.raiz,nodo )
        }
    }
    agregar(raiz,nodo){
        //se revisa si el valor es menor o mayor que la raiz
        if(nodo.value<raiz.value){
            //revisar si al lado izquierdo esta vacio
            if(!raiz.izq){
                raiz.izq=nodo
            }else{
            //en el caso contrario sigue analizando mas a la izquierda
                this.agregar(raiz.izq,nodo)
            }
        }else{
            //se revisa el lado derecho
            if(!raiz.der){
                raiz.der=nodo
            }else {
                this.agregar(raiz.der,nodo)
            } 
        }    
    }

    Raiz(){
        //se devuelve la raiz
        return this.raiz;
    }
    //se comprueba la existencia del dato y si tiene datos a la derecha y izquierda, los cuales se mostraran"
    Buscar(dato,raiz){
        if(!raiz) return false
        else if (raiz.value==dato) return raiz
        else if(dato<raiz.value) return this.Buscar(dato,raiz.izq)
        else if(dato>raiz.value) return this.Buscar(dato,raiz.der) 
    }
    BuscarMenor(raiz){
        if(raiz==null) return null
        else if(raiz.izq==null)return raiz
        else return this.BuscarMenor(raiz.izq)
    }
    BuscarMayor(raiz){
        if(raiz==null) return null
        else if(raiz.der==null)return raiz
        else return this.BuscarMayor(raiz.der)
    }
    
    EliminarPredecesor(dato,nodo){
        let temporal
        if (dato<nodo.value)
            this.EliminarPredecesor(dato,nodo.izq)
        else if(dato>nodo.value)
            this.EliminarPredecesor(dato,nodo.der)
        else if(nodo.izq && nodo.der){
            let mayor = this.BuscarMayor(nodo.izq)
            nodo.value=mayor.value
            this.EliminarPredecesor(mayor.value,nodo.izq)
        }else{
            temporal=nodo
            if(nodo.izq==null) nodo= nodo.der
            else if(nodo.der==null) nodo=nodo.izq
            delete temporal.value
        }
         
    }
    EliminarSucesor(dato,nodo){
        let temporal
        if (dato<nodo.value)
            this.EliminarSucesor(dato,nodo.izq)
        else if(dato>nodo.value)
            this.EliminarSucesor(dato,nodo.der)
        else if(nodo.izq && nodo.der){
            let menor = this.BuscarMenor(nodo.der)
            nodo.value=menor.value
            this.EliminarSucesor(menor.value,nodo.der)
        }else{
            temporal=nodo
            if(nodo.izq==null) nodo= nodo.der
            else if(nodo.der==null) nodo=nodo.izq
            delete temporal.value
        }
        
         
    }
    preOrden(raiz){
        if(raiz){
            console.log(raiz.value)
            this.preOrden(raiz.izq)
            this.preOrden(raiz.der)
            
        }
    }
    inOrden(raiz){
        if(raiz){
            this.inOrden(raiz.izq)
            console.log(raiz.value)
            this.inOrden(raiz.der)
        }   
    }
    
    postOrden(raiz){
        if(raiz){
            this.postOrden(raiz.izq)
            this.postOrden(raiz.der)
            console.log(raiz.value)
        }
    }
    Altura(raiz){
        if(raiz==null) return 0
        return(1+(this.Altura(raiz.izq),this.Altura(raiz.der)))
    }
    
}

let sal=new Arbol()
sal.insert(1)
sal.insert(3)
sal.insert(2)
sal.insert(7)
sal.insert(5)
sal.insert(6)
sal.insert(4)
sal.insert(9)
sal.insert(8)
sal.insert(10)



sal.inOrden(sal.Raiz())
sal.preOrden(sal.Raiz())
sal.postOrden(sal.Raiz())
console.log(sal.Buscar(7,sal.Raiz()))
console.log(sal)
console.log(sal.BuscarMenor(sal.Raiz()))
console.log(sal.Altura(sal.Raiz()))