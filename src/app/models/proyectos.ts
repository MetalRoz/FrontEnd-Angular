export class Proyectos {
    id?: number;
    nombre: string;
    urlimagen: string;
    urlproyecto: string;

    constructor (nombre: string, urlimagen: string, urlproyecto: string){
        this.nombre = nombre;
        this.urlimagen = urlimagen;
        this.urlproyecto = urlproyecto;

    }
    
}