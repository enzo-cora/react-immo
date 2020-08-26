import {Immobilier} from "../../../../models/immobilier";
import Filtrator2000 from "../../modules/filtrator2000/Filtrator2000";
import ReactPaginate from "react-paginate";
import css  from './showImmos.module.css'
import {resetInPage, savePagination, saveScrollElement} from "../../../../actions/actions-pages";
import {connect} from "react-redux";
import React, {FunctionComponent, useEffect, useRef} from "react";
import {useHistory,useLocation} from "react-router-dom";
import {resetInImmo} from "../../../../actions/actions-immos";
import {getPageCount, getSliceImmos, getTotal} from "../../../../selectors/immos-selector";


type state = {
    savePagination(pagination : any) : void,
    saveScrollElement(offSetTop : number) : void,
    resetInImmo(resetthis : string | Array<string>) : void,
    resetInPage(resetThis : string | Array<string>) : void,
    scroll : number,
    immos : Array<Immobilier> | undefined,
    status : string,
    page :any,
    total : number,
    comeFrom : string,
    pageCount : number,
}

const ShowImmo : FunctionComponent<state> = ({scroll,comeFrom,immos,status,page,pageCount,total,...rest}) => {


    let history = useHistory();
    let location = useLocation()

    useEffect(()=>{
        if (comeFrom && scroll && comeFrom  === status ) {
            window.scrollTo({top : scroll/1.5, left : 0,behavior :'smooth'})
            rest.resetInPage(['scrollElement','comeFrom'])
        }
        let unlisten = history.listen(newLocation => {
            let regex = new RegExp('(achat|location)/details/')
            let newPath = newLocation.pathname
            if (!newPath.match(regex) && newPath != location.pathname ){
                rest.resetInImmo('*')
                rest.resetInPage('*')
            }
        })

        return ()=> unlisten()
    },[]) // eslint-disable-line

    useEffect(()=>{
        if(page.pagination.currentPage > pageCount){
            let selectedPage = pageCount -1
            const offset = selectedPage * page.pagination.perPage;
            rest.savePagination({offset, currentPage : selectedPage})
        }
    },[total])

    function handlePageChange(e) {

        const selectedPage = e.selected;
        const offset = selectedPage * page.pagination.perPage;
        rest.savePagination({ currentPage : selectedPage, offset})
    }

    function handleDetailsClick(event,ref){
        let offSetTop = event.target.offsetTop
        rest.saveScrollElement(offSetTop)
        history.push(`${status}/details/${ref}`)
    }

    return (
        <>
            <Filtrator2000 status={status}/>
            {immos && <ReactPaginate previousLabel={"prev"}
                                     nextLabel={"next"}
                                     breakLabel={"..."}
                                     breakClassName={"break-me"}
                                     pageCount={pageCount}
                                     marginPagesDisplayed={2}
                                     pageRangeDisplayed={5}
                                     onPageChange={handlePageChange}
                                     containerClassName={"pagination"}
                                     activeClassName={"active"}
                                     forcePage={page.pagination.currentPage}
            />}

            <section className={css.section}>
                { immos && immos.map(immo => (

                        <aside key={immo._id} onClick={(e)=> handleDetailsClick(e,immo.reference)} className={css.aside}>
                                <h4><mark>{immo.status.toUpperCase()}</mark> : {immo.title}  </h4>

                                <p>{immo.description}</p>
                                <div className={css.div}>
                                    <ul>
                                        <li> Type : {immo.type} </li>
                                        <li> Prix : {immo.price} </li>
                                        <li> Surface : {immo.surface}</li>
                                        <li> Pieces : {immo.rooms} </li>
                                    </ul>

                                    <ul>
                                        <li>chambres : {immo.bedroom} </li>
                                        <li>salons : {immo.living_room} </li>
                                        <li>salles de bains : {immo.bathroom} </li>
                                        <li>cuisines : {immo.kitchen} </li>
                                        <li>garage : {immo.garage} </li>
                                        <li>terrasse : {immo.terrace} </li>
                                    </ul>

                                    <ul>
                                        <li>Ville : {immo.address.city}</li>
                                        <li>CP : {immo.address.postal_code} </li>
                                        <li>rue : {immo.address.street}</li>
                                        <li>Longitude : {immo.address.longitude} </li>
                                        <li>Latitude : {immo.address.latitude} </li>
                                    </ul>
                                </div>
                        </aside>
                    // </Link>

                ))}
            </section>

        </>
    );

}

//-----------CONTAINER-------------------
const mapStateToProps = state => ({
    immos : getSliceImmos(state),
    scroll : state.page.scrollElement,
    page : state.page,
    total : getTotal(state),
    comeFrom : state.page.comeFrom,
    pageCount : getPageCount(state)
})

const mapDispatchToProps = {
    savePagination,
    saveScrollElement,
    resetInImmo,
    resetInPage,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowImmo)

