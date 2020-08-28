import React, {Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {UploadAdaptator} from "./UploadAdaptator";
import {FileTransform} from "../../../middlewares/functions/fileTransform";
import {connect} from "react-redux";
import {fetchNewArticle} from "../../../actions/actions-admin-immo";

type props = {
    fetchNewArticle(formData : FormData) : void
}

class NewArticle extends Component <props,any> {

    refForm : any
    listCategorie = ['autre','achat','vente','location','confiance']
    div = document.createElement('div');
    fileTransform : FileTransform = new FileTransform()

    constructor(props : any) {
        super(props);
        this.refForm = React.createRef()
    }



    handleChange = (editor) => {
        this.div.innerHTML = editor.getData()
    }

    handleSubmit = () => {
        let elems = this.refForm.current.elements
        let formData = new FormData()
        for(let elem of elems) {
            switch (elem.type){
                case 'file' :
                    formData.append('img',elem.files[0])
                    break
                case 'checkbox' :
                    formData.append(elem.name,elem.checked)
                    break
                default :
                    formData.append(elem.name,elem.value)
                    break
            }
        }
        let imgs = this.div.querySelectorAll("img")
        if(imgs.length){
            imgs.forEach((elem,index) => {
                let base64 =  elem.getAttribute('src')
                let file = this.fileTransform.base64ToFile(base64,'images' + index)
                formData.append('imgs', file) })
        }
        formData.append('contenu',this.div.innerHTML)
        this.props.fetchNewArticle(formData)
    }

    render() {
        return (
            <div>
                <form ref={this.refForm} >
                    <div>
                        <label> Banniere <input type="file" name={"img"}/></label>
                    </div>

                    <div>
                        <label>Titre<input type="text" name={"titre"}/></label>
                    </div>

                    <div>
                        <label>Sous titre<input type="text" name={"sousTitre"}/></label>
                    </div>

                    <div>Categorie
                        <select name="categorie">
                            {this.listCategorie.map((elem,index)=>(
                                <option key={index} value={elem}>{elem}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>En ligne <input type="checkbox" name={"online"}/></label>
                    </div>
                </form>

                <h2>Rediger un article</h2>
                <CKEditor editor={ ClassicEditor }
                          onInit={ editor => {
                              editor.plugins.get('FileRepository').createUploadAdapter =  (loader) => {
                                    return new UploadAdaptator(loader) }
                          }}
                          onChange={(e,editor)=> this.handleChange(editor)}
                />

                <button onClick={this.handleSubmit}>Envoyer</button>
            </div>

    );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    fetchNewArticle
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewArticle)



