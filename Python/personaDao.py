from persona import Persona
from conexion import Conexion
from logger_base import log

class PersonaDAO:
     '''
     DAO significa: Data Access Object
     CRUD significa:
                    Create-> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
     '''
     _SELECIONAR='SELECT* FROM persona ORDER BY id_persona'
     _INSERTAR= 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
     _ACTUALIZAR= 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona = %s'
     _ELIMINAR ='DELETE from persona where id_persona =%s'
    
    #Definimos los metodos de clase
@classmethod
def selecionar(cls):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = [] #creamos lista
                for registro in registros:
                    persona = Persona(registro[0],registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas

if __name__=='__main__':
    persona= PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)