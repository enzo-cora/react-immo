import React, {FunctionComponent} from 'react';
import css from './new-immo.module.css'
import {connect} from "react-redux";
import {fetchNewImmo} from "../../../actions/actions-admin-immo";


type state = {
    resp : { any } ,
    fetchNewImmo(data : FormData) : void
}

const NewImmo : FunctionComponent<state> = ({fetchNewImmo})=> {


    function handleSubmit (e){
        e.preventDefault()
        let formData = new FormData()
        let elems = e.target.elements

        for (let elem of elems) {
            if(elem.type === 'file' && elem.files.length){
                switch (elem.name){
                    case 'img':
                        formData.append('img',elem.files[0])
                        break
                    case 'imgs' :
                        for(let key in elem.files){
                            formData.append('imgs',elem.files[key])
                        }
                        break
                }
            }
            else if(elem.type === 'checkbox'){
                formData.append(elem.name,elem.checked)
            }
            else {
                 formData.append(elem.name,elem.value)
            }
        }
        let rooms : any = +elems['bedroom'].value + +elems['living_room'].value
        formData.append('rooms',rooms)
        fetchNewImmo(formData)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={css.column}>

                <div>Banniere
                    <input required type="file" name="img" accept="image/jpeg" />
                </div>

                <div>Miniatures
                    <input type="file" name="imgs" multiple accept="image/jpeg" />
                </div>

                <div>
                    <select name="status">
                        <option value="location">Location</option>
                        <option value="achat">Achat</option>
                    </select>
                </div>

                <div>
                    <select name="type">
                        <option value="maison">Maison</option>
                        <option value="appartement">Maison</option>
                        <option value="local">Maison</option>
                    </select>
                </div>

                <div><label>title
                    <input type="text" name="title"/>
                </label></div>

                <div><label>Description
                    <textarea name="description" cols={100} rows={2} />
                </label></div>

                <div><label>surface
                    <input type="number" name="surface"/>
                </label></div>

                <div><label>price
                    <input type="number" name="price"/>
                </label></div>

                <div><label>bedroom
                    <input type="number" name="bedroom"/>
                </label></div>

                <div><label>bathroom
                    <input type="number" name="bathroom"/>
                </label></div>

                <div><label>kitchen
                    <input type="number" name="kitchen"/>
                </label></div>

                <div><label>living-room
                    <input type="number" name="living_room"/>
                </label></div>

                <div><label>garage
                    <input type="checkbox" name="garage"/>
                </label></div>

                <div><label>terasse
                    <input type="checkbox" name="terrace"/>
                </label></div>

                <div><label>country
                    <input type="text" name="country"/>
                </label></div>

                <div><label>region
                    <input type="text" name="region"/>
                </label></div>

                <div><label>postal_code
                    <input type="text" name="postal_code"/>
                </label></div>

                <div><label>city
                    <input type="text" name="city"/>
                </label></div>

                <div><label>street
                    <input type="text" name="street"/>
                </label></div>

                <div><label>longitude
                    <input type="number" name="longitude"/>
                </label></div>

                <div><label>latitude
                    <input type="number" name="latitude"/>
                </label></div>

                <div><label>selleurName
                    <input type="text" name="sellerName"/>
                </label></div>

                <div><label>selleurFirstName
                    <input type="text" name="sellerFirstName"/>
                </label></div>

                <button type={"submit"}>Envoyer</button>
            </form>
        </>
    );
}


//-----------CONTAINER-------------------

const mapDispatchToProps = {
    fetchNewImmo,
}

export default connect(
    null,
    mapDispatchToProps
)(NewImmo)

