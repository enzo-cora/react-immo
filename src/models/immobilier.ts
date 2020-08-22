export interface Immobilier {
        type: string,
        status: string,
        title: string,
        description:string,
        surface:number,
        price : number,
        bedroom: number,
        bathroom: number,
        living_room : number,
        kitchen : number,
        rooms : number,
        garage : boolean,
        terrace : boolean,
        address : {
            country: string,
            region : string,
            city  : string,
            street :  string,
            postal_code : string,
            longitude : number,
            latitude : number,
        },
        date : Date,
        selleurName? : string,
        selleurFirstName? : string,
        reference? : string,
         offres? : [],
        banniere? : string,
        photos? : [],
        _id? : string,
}

