export class Skills {
    id?: number;
    urlimagen: string;
    nombre: string;
    descripcion: string;

    constructor (urlimagen: string, nombre: string, descripcion: string){
        this.urlimagen = urlimagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    
}
