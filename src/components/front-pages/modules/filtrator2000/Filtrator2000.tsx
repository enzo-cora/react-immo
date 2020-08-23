import React, {useRef} from 'react';
import css from './filtrator2000.module.css'

/*
* Envoyer le filtre dans le global state
* Lancer une requete immo en fonction des filtre
* esseyer de modifier L'API pour passer le status "louer" ou "acheter" dans le body de la requete
* */
const Filtrator2000 = ()=> {

    const typeData = ['Maison','Appartement','Local']
    const bedroomsData = [1,2,3,4,5,6,7]
    const bathroomsData = [1,2,3,4,5,6,7]
    const living_roomData = [1,2,3,4]
    const kitchenData = [1,2,3]

    const formRef = useRef(null)



    function handleFormChange () {
        let form : any = formRef.current
        let filters : any = {}

        function getSelectedValues(elem)  {
            let result : Array<any> = []
            let options = elem.options
            for(let opt of options) {
                if(opt.selected){
                    result.push(opt.value)
                }
            }
            return result;
        }


        for (let elem of form.elements) {
            if (elem.value.length > 0) {
                switch (elem.name) {
                    case 'minSurface' :
                        if (filters.surface == undefined)
                            filters.surface = []
                        filters.surface[0] = elem.value
                        break
                    case 'maxSurface' :
                        if (filters.surface == undefined)
                            filters.surface = []
                        filters.surface[1] = elem.value
                        break
                    case 'minPrice' :
                        if (filters.price == undefined)
                            filters.price = []
                        filters.price[0] = elem.value
                        break
                    case 'maxPrice' :
                        if (filters.price == undefined)
                            filters.price = []
                        filters.price[1] = elem.value
                        break;
                    default:
                        elem.tagName == 'SELECT'? filters[elem.name] = getSelectedValues(elem) :
                        filters[elem.name] = elem.value
                        break;
                }
            }
        }
        console.log(filters)
    }

    return (
        <div>
        <h2>Vos filtres </h2>
            <section >
                <form ref={formRef} onChange={handleFormChange} >

                    <div className={css.flexRow}>
                        <aside>

                            <div>
                                <label> Region
                                    <input placeholder="Ile-de-France" name="region" type="text" />
                                </label>
                            </div>

                            <div>
                                <label > Ville
                                    <input placeholder="Paris" name="city" id="city" type="text"/>
                                </label>
                            </div>

                            <div>
                                <label> Code Postal
                                    <input placeholder="75235 CEDEX 05" name="postal_code" type="text"/>
                                </label>
                            </div>

                            <p>
                                <select name="type" multiple >
                                    {typeData.map((elem,index) => {
                                        return <option key={index} value={elem}>{elem}</option>
                                    })}
                                </select>
                            </p>

                        </aside>

                        <div>
                            <p>
                                <label>Prix
                                    <input type="number" name="minPrice" placeholder={'minimum'} min={'0'}/>
                                    <input type="number" name="maxPrice" placeholder={'maximum'} min={'0'}/>
                                </label>
                            </p>

                            <p>
                                <label>Surface
                                    <input type="number" name="minSurface" placeholder={'minimum'} min={'0'}/>
                                    <input type="number" name="maxSurface" placeholder={'maximum'} min={'0'}/>
                                </label>
                            </p>

                            <div className={css.flexRow}>

                                <div>
                                    <p>salon(s) :</p>
                                    <select name="living_room" multiple >
                                        {living_roomData.map((elem,index) => {
                                            return <option key={index} value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>cuisines(s) :</p>
                                    <select name="kitchen" multiple >
                                        {kitchenData.map((elem,index) => {
                                            return <option key={index} value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>chambres(s) :</p>
                                    <select name="bedroom" multiple >
                                        {bedroomsData.map((elem,index) => {
                                            return <option key={index} value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>Salle(s) de bains :</p>
                                    <select name="bathroom" multiple >
                                        {bathroomsData.map((elem,index) => {
                                            return <option key={index} value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>


                    <h4>Resultats trouvés : <strong>5 </strong></h4>
                </form>
            </section>
        </div>
    );
}

export default Filtrator2000;
