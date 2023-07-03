import logging as log
#Llamamos una configuracion basica
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s]%(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])
if __name__=='__main__':
    log.debug('Mensake a nivel debug')
    log.info('Mensaje nivel INFO')
    log.warning('Mensaje nivel WARNING')
    log.error('Mensaje nivel ERROR')
    log.critical('Mensaje nivel CRITICAL  ')
