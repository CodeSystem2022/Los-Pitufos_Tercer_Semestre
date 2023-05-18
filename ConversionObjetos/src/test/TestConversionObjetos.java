package test;
import domain.*;
public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado= new Escritor("Juan", 500, TipodeEscritura.CLASICO);
        System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles());//Si querenmos acceder a metodos Escritor
        
        //DownCastring
        //((Escritor).empleado.getTipodeEscritura();//Tenemos 2 opciones, esta es una
        Escritor escritor= (Escritor) empleado; //Segunda opcion
        escritor.getTipodeEscritura();

        //UpCasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
