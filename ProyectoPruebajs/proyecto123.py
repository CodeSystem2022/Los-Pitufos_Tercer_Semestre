# Definir una clase para representar una habitación
class Habitacion:
    def __init__(self, numero):
        self.numero = numero
        self.estado = 'libre'  # Estado inicial: libre

    # Método para cambiar el estado de la habitación
    def cambiar_estado(self, estado):
        self.estado = estado

# Crear una lista de habitaciones del hotel
num_habitaciones = 10  # Número total de habitaciones
habitaciones = []

# Inicializar las habitaciones del hotel
for i in range(1, num_habitaciones + 1):
    habitacion = Habitacion(i)
    habitaciones.append(habitacion)

# Función para mostrar el estado actual de todas las habitaciones
def mostrar_estado_habitaciones():
    print('Estado de las habitaciones:')
    for habitacion in habitaciones:
        print(f'Habitación {habitacion.numero}: {habitacion.estado}')

# Método para verificar el estado actual de las habitaciones
def verificar_estado_habitaciones():
    estado_habitaciones = {}
    for habitacion in habitaciones:
        estado_habitaciones[habitacion.numero] = habitacion.estado
    return estado_habitaciones

# Ejemplo de uso
habitaciones[1].cambiar_estado('ocupada')  # Ocupar la habitación 1
habitaciones[4].cambiar_estado('reservada')  # Reservar la habitación 4

mostrar_estado_habitaciones()  # Mostrar el estado actual de las habitaciones

# Verificar el estado actual de las habitaciones
estado_actual = verificar_estado_habitaciones()
print("Estado actual de las habitaciones:", estado_actual)