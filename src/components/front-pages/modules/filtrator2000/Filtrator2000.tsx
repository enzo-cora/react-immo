import React, {FunctionComponent, useEffect, useRef} from 'react';
import css from './filtrator2000.module.css'
import {connect} from "react-redux";
import {fetchByFilters} from "../../../../actions/actions-immos";
import {saveFilters} from "../../../../actions/actions-pages";
import {getTotal} from "../../../../selectors/immos-selector";

type state = {
    saveFilters,
    fetchByFilters,
    status : string,
    total : number,
    filters : any
}

const Filtrator2000 : FunctionComponent<state> = ({saveFilters,fetchByFilters,status,total, filters})=> {




    useEffect(()=> {
        if(filters?.status === status){
            saveFilters({...filters,status : status})
        }else{
            saveFilters({status : status})
        }
        fetchByFilters()

    },[])// eslint-disable-line

    const typeData = ['Maison','Appartement','Local']
    const bedroomsData = [1,2,3,4,5,6,7]
    const bathroomsData = [1,2,3,4,5,6,7]
    const living_roomData = [1,2,3,4]
    const kitchenData = [1,2,3]

    const formRef = useRef(null)
    
    function handleChange () {

        let form : any = formRef.current
        let filters : any = {status : status}

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
            if (elem.value && elem.value.length > 0) {
                switch (elem.name) {
                    case 'minSurface' :
                        if (filters.surface === undefined)
                            filters.surface = [0,0]
                        filters.surface[0] = +elem.value
                        break
                    case 'maxSurface' :
                        if (filters.surface === undefined)
                            filters.surface = [0,0]
                        filters.surface[1] = +elem.value
                        break
                    case 'minPrice' :
                        if (filters.price === undefined)
                            filters.price = [0,0]
                        filters.price[0] = +elem.value
                        break
                    case 'maxPrice' :
                        if (filters.price === undefined)
                            filters.price = []
                        filters.price[1] = +elem.value
                        break;
                    default:
                        elem.tagName === 'SELECT'? filters[elem.name] = getSelectedValues(elem) :
                            filters[elem.name] = elem.value
                        break;
                }
            }
        }
        saveFilters(filters)
        fetchByFilters()
    }


    return (
        <div>
            <h2>Vos filtres </h2>
            <section >
                <form ref={formRef}  >

                    <div className={css.flexRow}>
                        <aside>

                            <div>
                                <label> Regions
                                    <input onChange={handleChange}  value={filters?.region || ''} placeholder="Ile-de-France" name="region" type="text" />
                                </label>
                            </div>

                            <div>
                                <label > Ville
                                    <input onChange={handleChange} placeholder="Paris" value={filters?.city || ''} name="city" id="city" type="text"/>
                                </label>
                            </div>

                            <div>
                                <label> Code Postal
                                    <input onChange={handleChange} placeholder="75235 CEDEX 05"  value={filters?.postal_code || ''} name="postal_code" type="text"/>
                                </label>
                            </div>

                            <p>
                                <select onChange={handleChange} name="type" value={filters?.type || []} multiple >
                                    {typeData.map((elem,index) => {
                                        return <option key={index} value={elem}>{elem}</option>
                                    })}
                                </select>
                            </p>

                        </aside>

                        <div>
                            <p>
                                <label>Prix
                                    <input onChange={handleChange} type="number" value={filters?.price && filters.price[0] ? filters.price[0] : ''} name="minPrice" placeholder={'minimum'} min={'0'}/>
                                    <input onChange={handleChange} type="number" value={filters?.price && filters.price[1] ? filters.price[1] : ''} name="maxPrice" placeholder={'maximum'} min={'0'}/>
                                </label>
                            </p>

                            <p>
                                <label>Surface
                                    <input onChange={handleChange} type="number" value={filters?.surface && filters.surface[0] ? filters.surface[0] : ''} name="minSurface" placeholder={'minimum'} min={'0'}/>
                                    <input onChange={handleChange} type="number" value={filters?.surface && filters.surface[1] ? filters.surface[1] : ''} name="maxSurface"  placeholder={'maximum'} min={'0'}/>
                                </label>
                            </p>

                            <div className={css.flexRow}>

                                <div>
                                    <p>salon(s) :</p>
                                    <select onChange={handleChange} name="living_room" value={filters?.living_room || []} multiple >
                                        {living_roomData.map((elem,index) => {
                                            return <option key={index}  value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>cuisines(s) :</p>
                                    <select onChange={handleChange} name="kitchen" value={filters?.kitchen || []} multiple >
                                        {kitchenData.map((elem,index) => {
                                            return <option key={index}  value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>chambres(s) :</p>
                                    <select onChange={handleChange} name="bedroom" value={filters?.bedroom || []} multiple >
                                        {bedroomsData.map((elem,index) => {
                                            return <option key={index}  value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <p>Salle(s) de bains :</p>
                                    <select onChange={handleChange} name="bathroom" value={filters?.bathroom || []} multiple >
                                        {bathroomsData.map((elem,index) => {
                                            return <option key={index} value={elem}>{elem}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>


                    <h4>Resultats trouvés : <strong>{total} </strong></h4>
                </form>
            </section>
        </div>
    );
}


//-----------CONTAINER-------------------
const mapStateToProps = state => ({
    total : getTotal(state),
    filters : state.page.filters
})


const mapDispatchToProps = {
    saveFilters, fetchByFilters
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filtrator2000)


