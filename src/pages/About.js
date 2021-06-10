import { Component } from 'react';
import { DropList } from '../components/DropList';
import { Hero } from '../components/Hero';

export class About extends Component{

    render(){

        const fiabilityContent = "Les annonces postées sur Kasa garantissent un fiabilité totales. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes"
        const contentType = 'La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exculsion de notre plateforme.'
        const servicesContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        const securityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
  
        return (
            <section class="aboutPage">
                <Hero className="bannerHero rootInner" img="../img/bannerHero2.jpg"/>
                <section className="aboutContainer rootInner1023">
                    <DropList title="Fiabilité" status="close" content={fiabilityContent}/>
                    <DropList title="Respect" status="open" content={contentType}/>
                    <DropList title="Service" status="close" content={servicesContent}/>
                    <DropList title="Responsabilité" status="close" content={securityContent}/>
                </section>
            </section>
        )
    }
}