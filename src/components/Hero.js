import { Component } from 'react';
import '../css/hero.scss';

export class Hero extends Component{ 

    render(){      

        return (                

            <section className="bannerHero rootInner"> 
            

                <p className='flexImg'>
                    <img className='imgFlex' src={this.props.img} alt=""/> 
                </p>    

                
                {this.props.content} 
                  
                              
            </section>             
             
        )
    }
}
