export class UploadAdaptator {

  constructor(private loader) {
    this.loader = loader
  }

  upload() {
    return this.loader.file
      .then( file => new Promise( ( resolve, reject ) => {
        let myReader= new FileReader();
        myReader.onloadend = (e) => {
          resolve({ default: myReader.result });
        }
        myReader.readAsDataURL(file);
      } ) );
  };

  abort(){
    console.log("L'uplaod a ete annulee")
  }

}
