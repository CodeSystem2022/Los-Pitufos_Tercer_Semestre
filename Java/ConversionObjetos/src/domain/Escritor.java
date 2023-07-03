package domain;

public class Escritor extends Empleado {

    final TipodeEscritura tipodeEscritura;

    public Escritor(String nombre, double sueldo, TipodeEscritura tipodeEscritura) {
        super(nombre, sueldo);
        this.tipodeEscritura = tipodeEscritura;
    }

    public Escritor(String juan, int i, TipodeEscritura tipodeEscritura) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    //Metodo sobreEscribir
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Tipo Escritura"+tipodeEscritura.getDescripcion();
    }

    @Override
    public String toString() {
        return "Escritor{"+"tipoEscritura: "+tipodeEscritura+super.toString(); 
    }

    public TipodeEscritura getTipodeEscritura() {
        return tipodeEscritura;
    }

}
