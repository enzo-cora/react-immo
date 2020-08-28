import React, {FunctionComponent, useEffect} from "react";
import {connect} from "react-redux";
import {fetchAllArticles, resetInAdmin} from "../../../actions/actions-admin-immo";
import {Article} from "../../../models/article";


type state = {
    articles : [Article],
    resetInAdmin(resetThis : string | Array<string>) : void,
    fetchAllArticles() : void
}
const AllArticles :FunctionComponent<state> = ({articles,resetInAdmin,fetchAllArticles})=>{

    useEffect(()=>{
        fetchAllArticles()

        return ()=> resetInAdmin('articles')
    },[]) // eslint-disable-line

    return(
        <section>
            {articles &&
            <table>
                <thead>
                <tr>
                    <th>Reference</th>
                    <th>Titre</th>
                    <th>Categorie</th>
                    <th>Date de publication</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {articles.map((article,index)=>(
                    <tr key={index}>
                        <td>{article.reference}</td>
                        <td>{article.titre}</td>
                        <td>{article.categorie}</td>
                        <td>{article.date}</td>
                        {article.online && <td style={{color : 'green'}}>En ligne</td>}
                        {!article.online && <td style={{color : 'red'}}>Hors ligne</td>}
                        <td><button>voir</button><button>Modif</button><button>Supp</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            }

        </section>
    )
}


//-----------CONTAINER-------------------

const mapStateToProps = state => ({
    articles :state.admin.articles,
})

const mapDispatchToProps = {
    fetchAllArticles,
    resetInAdmin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllArticles)

