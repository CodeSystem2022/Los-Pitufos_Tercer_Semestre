archivo = open ("prueba.txt","r",
                encoding="utf8") # las letras son: "r" read, "a" append, "w" write, "x"
# print(archivo,read())
# print(archivo,read(16))
# print(archivo,read(10)) # continuamos desde la linea anterior
# print(archivo,readline())
# print(archivo,readline())

# vamos a interar el archivo, cada una de las lineas
# for linea in archivo:
   # print(linea) #muestra todo en lineas
   # print(archivo.readlines()) # muestra todo en una lista
# print(archivo.readlines()[11])  # para mostras especificamente una linea

#anexamos informacion, copiamos a otro
archivo2 = open("copia.txt","a", encoding="utf8")
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo
