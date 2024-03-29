export class Formation{
    id:number;
    titre:string;
    description:string;
    dateDebut:Date;
    dateFin:Date

    constructor(id:number,titre:string,description:string,dateDebut:Date,dateFin:Date){
        this.id=id;
        this.titre=titre;
        this.description=description;
        this.dateDebut=dateDebut;
        this.dateFin=dateFin;
    }
}