export class Aboutme {
    id?: number;
    nombre: string;
    ocupacion: string;
    descripcion: string;

    constructor (nombre: string, ocupacion: string, descripcion: string){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.descripcion = descripcion;
    }
    
}