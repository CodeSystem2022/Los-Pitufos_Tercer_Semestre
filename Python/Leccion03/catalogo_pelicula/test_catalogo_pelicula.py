from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as cp

opcion = None
while opcion != 4:
    try:
        print('Opciones : ')
        print(' 1.Agregar Peliculas')
        print('2. Listar las peliculas ')
        print('3. Eliminar catalogo de peliculas')
        print('4. salir')
        opcion = int(input('dijite una opcion de menu (1-4 ): '))
        if opcion == 1:
            nombre_pelicula = input('dijite el nombre de la pelicula')
            pelicula = Pelicula(nombre_pelicula)
            cp.agregar_peliculas(pelicula)
        elif opcion == 2:
            cp.lista_peliculas()
        elif opcion == 3:
            cp.eliminar_pelicula()
    except Exception as e:
        print(f'ocurrio un error de tipo :{e}')
        opcion = None
    else:
        print('salimos del programa')
