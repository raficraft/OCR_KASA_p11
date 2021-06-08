import { Component } from 'react';
import { DropList } from '../components/DropList';
import { Hero } from '../components/Hero';
import { DropListParent } from './../components/dropListV2Parent';

export class About extends Component{


    constructor(props){
        super(props)
        this.state ={
            status : 'close'
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(status){
        status === 'close' ?  this.setState({status: 'close'}) : this.setState({status: 'open'}); 
    }

    render(){


        const contentType= 'La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exculsion de notre plateforme.'
        const contentLorem= 'Vestibulum eleifend nibh quis commodo vestibulum. Quisque vel tortor id lectus scelerisque ultricies. Donec commodo mattis enim eget egestas. Mauris sodales felis at est pretium convallis.'
        const {status} = this.state

        return (


            <>
            <Hero/>
            <section className="aboutContainer rootInner1023">
                <DropList title="Fiabilité" status={status} content={contentLorem}    onToggles={this.toggle}/>
                <DropList title="Respect"   status={status} content={contentType}     onToggles={this.toggle}/>
                <DropList title="Service"   status={status} content={contentLorem}    onToggles={this.toggle}/>
                <DropList title="Responsabilité" status={status} content={contentLorem} onToggles={this.toggle}/>     
            </section>
            </>
        )
    }

}