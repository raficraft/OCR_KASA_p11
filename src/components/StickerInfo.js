import { Component } from 'react';
import { Stars } from './stars';
import '../css/stickerInfo.scss';

export class StickerInfo extends Component{

    render(){

        const hostName = this.props.host.name.split(' ')

        return ( 
            
            <section className="stickerInfo rootInner">

                <div className="locationInfo">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.location}</h2>
                    <div className="tagsContainer">
                    {this.props.tags.map((tag, key) =>(

                        <span key={key} className="tags"><p>{tag}</p></span>
                        
                    ))}
                    </div>
                </div>
                <div className="agentContainer">
                    <div className="agent">
                        <h2>{hostName[0]} <br></br>{hostName[1]}</h2>
                        <p className="flexImg"><img className="imgFlex" src={this.props.host.picture} alt={this.props.title}/></p>
                    </div>
                    <Stars rating={this.props.rating}/>
                  
                </div>

            </section>

          
           
        )
    }
}