from logger_base import log
from conexion import Conexion


class CursorDelPool:
    def __init__(self):
        self.conexion =None
        self._cursor = None

        def __enter__(self):
        log.debug('inicio del metodo whit y __enter__')
        self._conexion = Conexion.obtenerConexion()
        self._cursor = self._conexion.cursor()
        return self._cursor

    def  __exit__(self, tipo_exception, detalle_exception):
        log.debug('se ejecuta el metodo exit')
        if valor_exception:
            self._conexion.rollback()
            log.debugg(f'ocurrio una exception :{valor_exception} ')

        else :
            self._conexion.commit()
            log.debug('commit de la transaccion')
            self._cursor.close()
            Conexion.liberarConexion(self._conexion)


            if __name__ == '__main__':
                with CursorDelPool() as cursor:
                    log.debug('Dentro del bloque')
                    cursor.execute('SELECT * FROM persona')
                    log.debug(cursor.fetchall())
