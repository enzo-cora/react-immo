import React from 'react';
import css from './louer.module.css'
import {connect} from "react-redux";
import Filtrator2000 from "../../modules/filtrator2000/Filtrator2000";


const Louer = ({state})=> {
    return (
        <div>
            <Filtrator2000/>
            <section className={css.section}>



                <aside className={css.aside}>
                    <h4>Titre : Le titre</h4>
                    <div className={css.div}>
                        <ul>
                            <li> Type :  </li>
                            <li> Description : </li>
                            <li> Prix : </li>
                            <li> Description : </li>
                            <li> Surface : </li>
                            <li> Pieces : </li>
                        </ul>

                        <ul>
                            <li>chambres : </li>
                            <li>salons : </li>
                            <li>salles de bains : </li>
                            <li>cuisines : </li>
                            <li>garage : </li>
                            <li>terrasse : </li>
                        </ul>

                        <ul>
                            <li>Ville : </li>
                            <li>CP : </li>
                            <li>rue : </li>
                            <li>Longitude : </li>
                            <li>Latitude : </li>
                        </ul>
                    </div>
                </aside>

            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    state
})

export default connect(
    mapStateToProps,
    null
)(Louer)

