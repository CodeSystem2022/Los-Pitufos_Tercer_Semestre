import psycopg2

class Conexion:
    _DATEBASE='test_bd'
    _USERNAME='postgres'
    _PASSWORD='admin'
    _DB_PORT='5432'
    _HOST='127.0.0.1'
    _MIN_CON=1
    _MAX_CON=5
    _pool = None

    @classmethod
    def obtenerConexion(cls):
        conexion=cls.obtenerPool().getcoon()
        log.debug(f'Conexion obtenida del pool: ')
        return conexion
    @classmethod
    def obtenerCursor(cls):
        pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool= pool.SimpleCoonnection(cls._MIN_CON,
                                                  cls._MIN_CON,
                                                  host=cls._HOST,
                                                  user=cls._USERNAME,
                                                  password=cls._PASSWORD,
                                                  port=cls._DB_PORT,
                                                  database=cls._DATABASE)
                log.debug(f'Creacion del pool exitosa: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrio un erroral obtener el pool: {e}')
                sys.exit()
        else:
            return cls._pool
    @classmethod
    def liberarConexion(cls,conexion):
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Regresamos la coexion del pool: ')
    
if __name__=='__main__':
    conexion1= Conexion.obtenerConexion()
    conexion2= Conexion.obtenerConexion()
    conexion3= Conexion.obtenerConexion()
    conexion4= Conexion.obtenerConexion()
    conexion5= Conexion.obtenerConexion()