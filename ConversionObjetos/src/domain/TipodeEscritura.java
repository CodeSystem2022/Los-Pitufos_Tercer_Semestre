package domain;
public enum TipodeEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    
    private final String descripcion;
    
    private TipodeEscritura(String descripcion){//Constructor
        this.descripcion=descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

}
