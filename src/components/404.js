import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/404.scss';

export class Redirect404 extends Component{

    render(){
        return (            
            <section className="notFound rootInner">
               <h1>404</h1>
               <p>Oups! La page que vous demandé n'existe pas.</p>
               <Link to="/" title="Retour à la page d'acceuil">Retour à la page d'acceuil</Link>
            </section>
        )
    }
}