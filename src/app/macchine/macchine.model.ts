export class Macchine {
    id: number;
    modello: string;
    marca: string;
    prezzo: number;
    velocitamax: number

    constructor(id: number, modello: string, marca: string, prezzo: number, velocitamax: number) {
        this.id  = id ;
        this.marca = modello;
        this.modello = marca;
        this.prezzo = prezzo;
        this.velocitamax = velocitamax
    }
}