class Persona{//Clase Padre
    constructor(nombre , apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido ;
    }    
    set apellido(apellito ){    
        this._apellido=apellito;
    }

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
    //SobreEscribiendo el metodo de la clase padre(Object)
    toString() {//Regresa un String
        //Se aplica el polimorfismo que significa=multiples formas en tiempo de ejecucion
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
        }
    static saludar(){
        console.log("Saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//Hereda los atributos y funciones del padre
        this._departemento=departamento;
    }
    get departamento(){
        return this._departemento;
    }
    set departamento(dpto){
        this._departemento= dpto;
    }
    //SobreEscritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departemento
    }
}
let persona1 = new Persona('Martin' , 'Perez');
console.log(persona1); 
let persona2= new Persona('Carlos' , 'Lara' );
console.log(persona2);

let empleado1= new Empleado('Maria','Gimenez','Sistema')
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString; Esta es la manera de acceder al atributo
console.log(persona1.toString())
console.log(empleado1.toString())

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);
