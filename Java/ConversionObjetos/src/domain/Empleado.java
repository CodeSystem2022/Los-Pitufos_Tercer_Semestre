package domain;
import java.util.Objects;
public class Empleado {

    protected String nombre;
    protected double sueldo;
    //Contructores

    public Empleado(String nombre, double sueldo) {
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    
    //Metodo para la sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+this.nombre+", Sueldo: "+this.sueldo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    @Override
    public String toString() {
        return "Empleado {"+"Nombre: "+ nombre+", sueldo: "+sueldo+"}"; 
    }
    
    

}
