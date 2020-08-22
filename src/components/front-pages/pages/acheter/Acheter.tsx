import React from 'react';
import {fetchAllImmos} from "../../../../actions/actions-immos";
import {connect} from "react-redux";

interface props {
    salut : string,
    getAllImmos(),
    lesImmos : string,
    leState
}

class Acheter extends React.Component<props>{

    constructor(props) {
        super(props);
        this.fetchAllImmo = this.fetchAllImmo.bind(this)
    }

    fetchAllImmo (){
        this.props.getAllImmos()
    }

    render() {
        return (
            <div>
                <p>rrrtttyyy</p>
                <button onClick={this.fetchAllImmo}>Les données</button>
                <code>{JSON.stringify(this.props.leState )}</code>
            </div>
        )
    }
}


//PARTIE CONTAINER
const mapStateToProps = state => ({
    leState : state
})

const mapDispatchToProps = {
    getAllImmos: fetchAllImmos
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Acheter)
