from Arbol import Arbol

arbol = Arbol("Jose")
arbol.agregar("Arroz")
arbol.agregar("Maria")
arbol.agregar("Yazmin")
arbol.agregar("Outlast")
arbol.agregar("Federico")
arbol.agregar("Sparrow")
nombre = input("Ingresa algo para agregar al árbol: ")
arbol.agregar(nombre)
arbol.preorden()
arbol.inorden()
arbol.postorden()

busqueda = input("Busca algo en el árbol: ")
nodo = arbol.buscar(busqueda)



if nodo is None:
    print(f"{busqueda} no existe")
else:
    print(f"{busqueda} sí existe")

arbol_numeros = Arbol(5)
arbol_numeros.agregar(1984)
arbol_numeros.agregar(60)
arbol_numeros.agregar(10)
arbol_numeros.agregar(20)
arbol_numeros.agregar(10)
arbol_numeros.agregar(25)
arbol_numeros.agregar(59)
arbol_numeros.agregar(64)
arbol_numeros.agregar(10)
arbol_numeros.agregar(19)
arbol_numeros.agregar(23)
arbol_numeros.agregar(18)
arbol_numeros.agregar(1)
arbol_numeros.agregar(2013)
arbol_numeros.preorden()
arbol_numeros.inorden()
arbol_numeros.postorden()


busqueda = int(input("Ingresa un número para buscar en el árbol: "))
n = arbol_numeros.buscar(busqueda)
if n is None:
    print(f"{busqueda} no existe")
else:
    print(f"{busqueda} sí existe")