import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/sticker.scss';

export class Sticker extends Component{
 

    render(){      

        const { title, src, id } = this.props;

        return (     
            

            <article className="sticker">                
                <Link to={`/logement/${id}`} title={title}>

                   <p className='flexImg'><img src={src} alt=""/></p>
                    <h2>{title}</h2>

                </Link>                
            </article>             
             
        )
    }

}