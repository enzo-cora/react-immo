# -------------L'API --------------

## ---Articles---  
### Model API : 
```json 
{
   "titre":"string",
   "reference":"string",
   "contenu":"string",
   "photo":"string",
   "online":"boolean",
   "categorie":"string",
   "sousTitre":"string",
   "date?":"Date"
}
```
### GET - getAll :
> /api1/articles/getAll

### GET - getOneById :
> /api1/articles/getOne/:id
* id : "article id "

### GET - getByCategories :
> /api1/articles/getByCategories/:id'
* id : 'autre'/'achat'/'vente'/'location'/'confiance'

### GET - getLast :
> /api1/articles/getLast


## ---Agence--- 
### Model API : 
```json 
{
   "nomAgence":"string",
   "photos?":["string"],
   "fixe1":"number",
   "fixe2":"number",
   "portable":"number",
   "mail1":"string",
   "mail2":"string",
   "horraires":"string",
   "jours":"string",
   "presentation":"string",
   "address":{
      "country":"string",
      "region":"string",
      "city":"string",
      "street":"string",
      "postal_code":"string",
      "longitude":"number",
      "latitude":"number"
   },
   "gerant":{
      "nom":"string",
      "prenom":"string",
      "photo":"string",
    }
}
```
### GET - getAgenceInfos :
> /api1/agence/getAgence

### POST - modifyAgenceInfos ( Need to be admin ) :
> /api1/agence/modifyAgence

* Body post request : 

```javascript 
{
    nomAgence : string ,
    photos? : [string] ,
    fixe1 : number,
    fixe2 : number,
    portable : number,
    mail1 : string,
    mail2 : string,
    horraires : string,
    jours : string,
    presentation : string,
    country: string,
    region : string,
    city  : string  ,
    street :  string  ,
    postal_code : string  ,
    longitude : number,
    latitude : number,
    nom : string,
    prenom : string,
    photo : string, //Photo de l'agent
}
```


## ---Authentification---
### Model API : 
```json 
{
   "_id":"string",
   "mail":"string",
   "mdp":"string",
   "sexe":"string",
   "nom":"string",
   "prenom":"string",
   "address":{
      "pays":"string",
      "ville":"string",
      "cp":"number",
      "rue":"string"
   },
   "phone":"number",
   "pub1?" :"boolean",
   "pub2?":"boolean",
   "isAdmin?":"boolean",
   "created_date":"Date"
}
```

### POST - Register : 
> /api1/authentification/register
* body post request :
```javascript
{
  _id : string,
  mail : string,
  mdp : string,
  sexe : string,
  nom : string,
  prenom : string,
  pays : string,
  ville : string,
  cp : number,
  rue : string,
  phone : number,
  pub1? : boolean,
  pub2? : boolean,
  isAdmin? : boolean
}
```

### POST - Login : 
> /api1/authentification/login
* body post request :
{
  mail : string,
  mdp : string,
}

### GET - getUserInformations : ( Need to be connected )
> /api1/authentification/user/:id
* "id" : "user_id"


## ---Immobilier---
### Model API: 
```JSON 
{
   "type":"string",
   "status":"string",
   "title":"string",
   "description":"string",
   "surface":"number",
   "price":"number",
   "bedroom":"number",
   "bathroom":"number",
   "living_room":"number",
   "kitchen":"number",
   "rooms":"number",
   "garage":"boolean",
   "terrace":"boolean",
   "address" : {
       "country":"string",
       "region":"string",
       "city":"string",
       "street":"string",
       "postal_code":"string",
       "longitude":"number",
       "latitude":"number",
   },
   "date":"Date",
   "selleurName?":"string",
   "selleurFirstName?":"string",
   "reference?":"string",
   "offres?":[],
   "banniere?":"string",
   "photos?":[],
   "_id?":"string"
}
```

### GET - getAll : 
> /api1/immobilier

### POST - getSomesByFilters :
> /api1/immobilier/filter'
* status : "achat" or "location"
* body post request : 
```javascript
{
        type?: ['local?', 'appartement?', 'maison?'],
        status?: ['achat?' | 'location?'],
        surface?: [min,max],
        price? : [min,max],
        bedroom?: number,
        bathroom?: number,
        living_room? : number,
        kitchen? : number,
        garage? : boolean,
        terrace? : boolean,
        region? : string,
        city?  : string,
        postal_code? : string,
}
```
### POST - getOneById :
> /api1/immobilier/findOne/:id
* id : "logement_id" 

### POST - getNumberOfResultsByFilters :
> /api1/immobilier/numberResults

* body post request : 
```javascript
{
        type?: ['local?', 'appartement?', 'maison?'],
        surface?: [min,max],
        price? : [min,max],
        bedroom?: number,
        bathroom?: number,
        living_room? : number,
        kitchen? : number,
        garage? : boolean,
        terrace? : boolean,
        region? : string,
        city?  : string,
        postal_code? : string,
}
```

### GET - get4LatestImmos : 
> /api1/immobilier/getLast/:quantity
* quantity : number ('how many ?')

### POST - get all distinct value for one key : 
> /api1/immobilier/getDistinct
* body post request : 

```javascript
{ name : type | status | title | description | surface | price | bedroom | bathroom | living_room | kitchen | rooms | garage | terrace | country | region | city | street | postal_cod | longitude | latitude | date | selleurName | selleurFirstName | reference | offres |  banniere | photos | _id
}
```
# ---------- Le FRONT-END ----------
Site web d'agence immobilière 
