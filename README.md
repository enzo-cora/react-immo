# |||||||||||||||||||||||||  FRONT-END ||||||||||||||||||||||||||
### REACT + REDUX + RXJS + TYPESCRIPT

# |||||||||||||||||||||||||  API REST ||||||||||||||||||||||||||
# --------------------------- INFOS--------------------------
*PING - Without dataBase call : 
>/api1/articles/test

* RESPONSE ERROR FORMAT  :
```json
{success :{message : "string"}}
```
* RESPONSE SUCCESS FORMAT  : 
```json
{title : "string", message : error.message}
```
# ------------------------- USER----------------------------


## ---Articles---  
### OBJECT MODEL RECEIVED FROM API : 
```json 
{
   "titre":"string",
   "reference":"string",
   "contenu":"string",
   "photo":"string",
   "online":"boolean",
   "categorie":"string",
   "sousTitre":"string",
   "date":"Date"
}
```
### GET - getAll :
> /api1/articles/getAll

### GET - getOneById :
> /api1/articles/getOne/:id
* id : "article_id"

### GET - getByCategories :
> /api1/articles/getByCategories/:id?number=5'
* id : 'autre' | 'achat' |'vente' |'location'| 'confiance'
* number : queryParams for number of articles

### GET - getLast :
> /api1/articles/getLast


## ---Agence--- 
### OBJECT MODEL RECEIVED FROM API : 
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


## ---Authentification---
### OBJECT MODEL RECEIVED FROM API : 
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
* body request :
```javascript
{
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
}
```

### POST - Login : 
> /api1/authentification/login
* body request :
```javascript
{
  mail : string,
  mdp : string,
}
```
* Response : 
```javascript
{
  token : string,
  success : {message : string},
  user : user,
}
```
* token content : 
```javascript
{
  userId : string,
  isAdmin: boolean,
  comeFrom : "immobilierApp"
}
```

### GET - getUserInformations : ( Need to be connected )
> /api1/authentification/user/:id
* "id" : "user_id"


## ---Immobilier---
### OBJECT MODEL RECEIVED FROM API: 
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

### GET - getAll : 
> /api1/immobilier

### POST - getSomesByFilters :
> /api1/immobilier/filter'
* status : "achat" or "location"
* body request : 

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
### POST - get One Immo By Reference :
> /api1/immobilier/findOne/:reference
* reference : "logement_reference" 

### POST - get Number Of Results By Filters :
> /api1/immobilier/numberResults

* body request : 
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

### GET - getLatestImmos : 
> /api1/immobilier/getLast/:quantity
* quantity : number ('how many ?')

### POST - get all distinct value for one key : 
> /api1/immobilier/getDistinct
* body request : 

```javascript
{ name : type | status | title | description | surface | price | bedroom | bathroom | living_room | kitchen | rooms | garage | terrace | country | region | city | street | postal_cod | longitude | latitude | date | sellerName | sellerFirstName | reference | offres |  banniere | photos | _id
}

```

# # ------------------------- ADMIN --------------------------
La différence des GETs Admin est qu'ils recupèrent + d'informations que les GETs User.
## ADMIN ACCOUNT  
* mail : admin@gmail.com
* password : admin

## ---Immobilier Admin---
### OBJECT MODEL RECEIVED FROM API: 
```json 
{
   type:"string",
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
   Date:Date,
   "sellerName":"string",
   "sellerFirstName?":"string",
   "reference":"string",
   "offres?":["string"],
   "banniere":"string",
   "photos":["string"],
   "_id":"string"
}
```

### GET - get all immos : 
> /api1/admin/immo/getByFilter

### POST - get immos by admin filters  : 
> /api1/admin/immo/getByFilter

### POST - Add one immo  : 
> /api1/admin/immo/newImmo
* request type : FormData ( multipart/form-data )
* body request :
```javascript
{
    type: string,
    status: string,
    title: string,
    description: string,
    surface: number,
    price: number,
    bedroom: number,
    bathroom: number,
    living_room: number,
    kitchen: number,
    rooms: number,
    garage: boolean,
    terrace: boolean,
    country: string,
    region: string,
    city: string,
    street: string,
    postal_code: string,
    longitude: number,
    latitude: number,
    sellerName: string,
    sellerFirstName: string,
    img: file,
    imgs: [file],
    offres?:[string],
}
```


### DELETE - delete one   : 
> /api1/admin/immo/delete/:reference
* reference : 'logement_reference'

### PUT - update one   : 
> /api1/admin/immo/update/:reference
* reference : 'logement_reference'
* request type : FormData ( multipart/form-data )
* body request :
```javascript
{
   type: string,
   status: string,
   title: string,
   description: string,
   surface: number,
   price: number,
   bedroom: number,
   bathroom: number,
   living_room: number,
   kitchen: number,
   rooms: number,
   garage: boolean,
   terrace: boolean,
   country: string,
   region: string,
   city: string,
   street: string,
   postal_code: string,
   longitude: number,
   latitude: number,
   sellerName: string,
   sellerFirstName: string,
   img: file,
   imgs: [file],
   offres?:[string],
}
```

## ---Articles Admin ---
### OBJECT MODEL RECEIVED FROM API : 
```json 
{
   "titre":"string",
   "reference":"string",
   "contenu":"string",
   "photo":"string", //Banniere
   "online":"boolean",
   "categorie":"string",
   "sousTitre":"string",
   "date":"Date"
}
```

### GET - get All articles :
> /api1/admin/articles/getAll

### POST - publish one article :
> /api1/admin/articles/publish
* request type : FormData ( multipart/form-data )
* body request :
```javascript
{
   titre: string,
   contenu: string,
   img: file, //banniere
   imgs : [file], //Photo in articles 
   online: boolean,
   categorie: string, //listCategorie = ['autre','achat','vente','location','confiance']
   sousTitre: string,
}
```
ATTENTION : Les photos contenus dans le corp de l'article doivent être en base64 ET doivent AUSSI être contenues dans un Array\<File> avec le fieldName "imgs"


### PUT - edit one article :
> /api1/admin/articles/update/:reference
* reference : 'article_reference'
* request type : FormData ( multipart/form-data )
* body request :
```javascript
{
    titre: string,
    contenu: string,
    img: file //banniere
    imgs : [file] //Photo in articles 
    online: boolean,
    categorie: string, //listCategorie = ['autre','achat','vente','location','confiance']
    sousTitre: string,
}
```
ATTENTION : Les photos contenues dans le corp de l'article doivent être en BASE64 ET doivent AUSSI être contenues dans un Array\<File> avec le fieldName "imgs"

### DELETE - delete one article :
> /api1/admin/articles/delete/:reference
* reference : 'article_reference'

## ---Agence Admin ---
### POST - modify Agence Infos :
> /api1/admin/agence/update

* body request : 

```javascript 
{
    nomAgence : string ,
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

    imgs? : [file] , //Photo de l'agence
    img? : file, //Photo du gerant
}
```
