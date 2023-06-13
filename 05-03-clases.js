class Personas{

    static contadorPersonas=0;//Atributo estatico
    //email='Valor default email';//Atributo no estatico

    static get MAX_OBJ(){//Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre= nombre;
        this._apellido= apellido;
        if(Personas.contadorPersonas < Personas.MAX_OBJ){
            this.idPersona= ++Personas.contadorPersonas
        }       
        else{
            console.log('Se a superado el maximo de objetos permitidos')
        } 

        //this.contadorObjectPersona; No se debe hacer
        //this.idPersona= ++Personas.contadorPersonas;
        //console.log('Se incrementa el contador: ')
    
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+' '+this._apellido
    }
    //Sobreescribiendo el metodo de la clase padre(objetc)
    toString(){//Regresa un String
        //Se aplica el polomorfismo que significa =multiples formas
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto()    
    }
    static saludar(){
        console.log('Saludos desde este metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Personas{//Clases hija
constructor(nombre, apellido, departamento){
    super(nombre, apellido);
    this._departamento = departamento;
}
get departamento(){
    return this._departamento;
}
set departamento(departamento){
    this._departamento = departamento;
}
//Sobreescritura
nombreCompleto(){
    return super.nombreCompleto()+', '+this._departamento
}

}
let empleado1= new Empleado('Mabel','Perez','Sistema')
console.log(empleado1.departamento)
console.log(empleado1.nombreCompleto());
//Get
let persona1= new Personas('Sebastian', 'Truviano')
console.log(persona1);
console.log(persona1._nombre);
console.log(persona1._apellido);
let persona2 = new Personas('Carlos', 'Lara');
console.log(persona2);
//Set
persona2.nombre='Maria Laura';
console.log(persona2);
persona2.apellido='Gonzalez';
console.log(persona2.apellido);

//Object.prototype.toString; Esta es la manera de acceder a atributos y metodos de forma dinamica
console.log(empleado1.toString())
console.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto
Personas.saludar();
Personas.saludar2(persona2);

//console.log(persona1.contadorObjectPersonaP)
console.log(Personas.contadorObjectPersona);
console.log(Empleado.contadorObjectPersona);

//Atributo NO estatico
console.log(persona1.email);
console.log(empleado1.email);
//console.log(Personas.email)//No accedde a la variable, no se accedes  desde la clase
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(persona2.toString());
console.log(Personas.contadorPersonas);

let persona3=new Personas('Carla','Pertosi');
console.log(persona3.toString());
console.log(Personas.contadorPersonas);

console.log(Personas.MAX_OBJ);
Personas.MAX_OBJ=10; //No se puede modificar ni alterar
console.log(Personas.MAX_OBJ);

let persona4 = new Personas('Lilinana', 'Paz')
console.log(persona4.toString());
let persona5= new Personas('Franco', 'Diaz');
console.log(persona5.toString());
