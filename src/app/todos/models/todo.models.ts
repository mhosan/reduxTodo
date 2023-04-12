export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        //this.id = new Date().getTime(); //milisengundos desde el 1 de enero de 1970 (tiempo Unix)
        this.id = Math.random();
        this.completado = false;
    }
}