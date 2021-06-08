import { Component } from 'react';
import { DropList } from '../components/DropList';
import { Hero } from '../components/Hero';

export class About extends Component{

    render(){

        const contentType= 'La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exculsion de notre plateforme.'
        const contentLorem= 'Vestibulum eleifend nibh quis commodo vestibulum. Quisque vel tortor id lectus scelerisque ultricies. Donec commodo mattis enim eget egestas. Mauris sodales felis at est pretium convallis.'

        return (
            <>
            <Hero img="../img/bannerHero2.jpg"/>
            <section className="aboutContainer rootInner1023">
                <DropList title="Fiabilité" status="close" content={contentLorem}/>
                <DropList title="Respect" status="open" content={contentType}/>
                <DropList title="Service" status="close" content={contentLorem}/>
                <DropList title="Responsabilité" status="close" content={contentLorem}/>
            </section>
            </>
        )
    }
}