import React, {FunctionComponent, useEffect} from 'react';
import {Immobilier} from "../../../../models/immobilier";
import {connect} from "react-redux";
import {fetchOneById, resetInImmo} from "../../../../actions/actions-immos";
import css from './detailsImmos.module.css'
import {
    useHistory,
    useParams
} from "react-router-dom";
import {saveComeFrom} from "../../../../actions/actions-pages";


type state = {
    details : Immobilier,
    fetchOneById(id : string) : void,
    resetInImmo(resetThis : string | Array<string>) : void,
    saveComeFrom(comeFrom : string) : void
}

const DetailsImmo : FunctionComponent<state> = ({saveComeFrom,fetchOneById, details, resetInImmo})=> {

    let { id,status } = useParams();
    let banner : any = React.createRef()
    let history = useHistory()

    useEffect(()=>{
        fetchOneById(id)

        return ()=> resetInImmo('details')
    },[])// eslint-disable-line



    function handleMiniasClick (src){
        let elem = banner.current
        elem.setAttribute("src", src);
    }


    function handleReturn(){
        saveComeFrom(status)
        history.goBack()
    }


    return (
        <>
            {details &&
            <div>
                <div className={css.row}>
                    <img src={details.banniere} onClick={()=> handleMiniasClick(details.banniere)} className={css.miniatures} alt=""/>
                    {details.photos?.map((elem,index) => <img src={elem} onClick={()=> handleMiniasClick(elem)}  className={css.miniatures} key={index} alt=""/>)}
                    <button onClick={handleReturn} style={{height : '3rem' }}>Retour à la liste </button>
                </div>
                <section className={css.row}>
                    <div>
                        <img className={css.banner} ref={banner} src={details.banniere} alt=""/>
                    </div>
                    <aside>
                            <h4><mark>{details.status.toUpperCase()}</mark> : {details.title}  </h4>

                            <p>{details.description}</p>
                            <div className={css.div}>
                                <ul>
                                    <li> Type : {details.type} </li>
                                    <li> Surface : {details.surface}</li>
                                    <li> Pieces : {details.rooms} </li>
                                </ul>

                                <ul>
                                    <li>chambres : {details.bedroom} </li>
                                    <li>salons : {details.living_room} </li>
                                    <li>salles de bains : {details.bathroom} </li>
                                    <li>cuisines : {details.kitchen} </li>
                                    <li>garage : {details.garage} </li>
                                    <li>terrasse : {details.terrace} </li>
                                </ul>

                                <ul>
                                    <li>Ville : {details.address.city}</li>
                                    <li>CP : {details.address.postal_code} </li>
                                    <li>rue : {details.address.street}</li>
                                    <li>Longitude : {details.address.longitude} </li>
                                    <li>Latitude : {details.address.latitude} </li>
                                </ul>
                                {details.status === 'achat' && <h2> Prix : <mark>{details.price.toLocaleString()}  €</mark> </h2> }
                                {details.status === 'location' && <h2> Prix : <mark>{Math.ceil(details.price / 900).toLocaleString()}  €</mark> </h2> }
                            </div>
                    </aside>
                </section>
                

            </div>}
        </>
    );
}

const mapStateToProps = state => ({
    details : state.immobilier.details
})

const mapDispatchToProps = {
    fetchOneById,
    resetInImmo,
    saveComeFrom
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsImmo)


