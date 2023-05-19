class Personas{
    constructor(nombre, apellido){
        this._nombre= nombre;
        this._apellido= apellido;
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
}
let empleado1= new Empleado('Mabel','Perez','Sistema')
console.log(empleado1.departamento)
let persona1 = new Personas('Martin', 'Perez');
//Get
console.log(persona1);
console.log(persona1._nombre);
console.log(persona1._apellido);
let persona2 = new Personas('Carlos', 'Lara');
console.log(persona2);
//Set
persona2.nombre='Maria Laura';
console.log(persona2);
persona2.apellido='Gonzalez';
console.log(persona2.apellido)
