export type User = {
    _id:string,
    mail:string,
    mdp:string,
    sexe:string,
    nom:string,
    prenom:string,
    address:{
        pays:string,
        ville:string,
        cp:number,
        rue:string
    },
    phone:number,
    pub1? :boolean,
    pub2?:boolean,
    isAdmin?:boolean,
    created_date:Date
}
