import React from 'react';
import {fetchAllImmos} from "../../../../actions/actions-immos";
import {connect} from "react-redux";

interface props {
    salut : string,
    getAllImmos(),
    lesImmos : string,
    state,
    immobilier
}



const Acheter = (props : props)=> {

    const fetchAllImmo = () => {
        props.getAllImmos()
    }

    return (
        <section>
            <p>Slfgerger</p>
            <button onClick={fetchAllImmo}>Les données</button>
            <code>{JSON.stringify(props.immobilier )}</code>

        </section>
    );
}

//--------------PARTIE CONTAINER---------------------

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    getAllImmos: fetchAllImmos
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Acheter)
