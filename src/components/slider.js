// Component adapté du tuto de grafikart sur la 
// création d'un carousel en Javascript.
// https://grafikart.fr/tutoriels/carrousel-javascript-87#autoplay


import { Component } from 'react';

// Dépendance à installer pour les icones 
// qui regroupent une grande quantité des bibliothèques existantes 
// {Font Awesome / Material Design / Game Icon ...}
// {npm install react-icons --save} 
// Site web : [https://react-icons.github.io/react-icons/]

import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import '../css/slider.scss';

export class Slider extends Component{

    constructor(props){
        super(props)

        this.state = {
            currentPosition : `translate3d(0,0,0)`,
            transition : `transform 0.3s`,
            pagination : 1
        };       

        this.options = {
            slidesToScroll : 1,
            slidesVisible : 1,
            currentItem : 0,
        }

        this.items = this.props.pictures  //Redifinie  les images transmises dans un tableau avec une racine    


        this.goToItem = this.goToItem.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.createCarousel()
    }


    createCarousel(){     


        this.offset = this.options.slidesVisible * 2;
        this.count = this.items.length;

        this.items = [
            ...this.items.slice(this.items.length - this.offset),
            ...this.items,
            ...this.items.slice(0,this.offset)
        ];

        this.currentItem = this.offset;

        
        const ratio = this.items.length / this.options.slidesVisible;
        this.widthContainer = (ratio *100) + "%";
        this.widthEl = (((100/this.options.slidesVisible) / ratio) + "%");
        
        
    }
  

    next(){    

        const indexCtrl = this.options.currentItem + this.options.slidesToScroll;
        let translate = {...this.state.currentPosition};

        if(indexCtrl < this.count+this.offset){

            translate = this.goToItem(this.options.currentItem + this.options.slidesToScroll,true)      
            this.setState({currentPosition : translate});

        }else{

            //Gestion de la boucle
            translate = this.goToItem(this.offset-1,false);   
            this.setState({currentPosition : translate}); 

            // Fausse temporisation
            setTimeout(
                function() {
                    translate = this.goToItem(this.offset,true);     
                    this.setState({currentPosition : translate});            
                }
                .bind(this),1
            );
        }

    }

    prev(){ 

        const indexCtrl = this.options.currentItem - this.options.slidesToScroll;
   

        let translate = {...this.state.currentPosition};
        if(indexCtrl >= this.offset){
        translate = this.goToItem(this.options.currentItem - this.options.slidesToScroll);       
        this.setState({currentPosition : translate});
        

        }else{           

            //gestion de la boucle
            translate = this.goToItem(this.items.length-this.offset,false);      
            this.setState({currentPosition : translate}); 

            // Fausse temporisation
            setTimeout(
                function() {
                    translate = this.goToItem(this.items.length-this.offset-1,true);      
                    this.setState({currentPosition : translate});            
                }
                .bind(this),1
            );
        }        
    }

    goToItem(index,animated){

        if(animated === false){
            this.setState({transition : 'none'});
            
        }else{
            this.setState({transition : `transform 0.3s`});
        }
        
        if(index < 0){
            index = this.items.length - this.options.slidesVisible;
        }else if(index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === 'undefined'&& index>this.currentItem)){
            index = 0;
        }
        const translate = index * (-100 / this.items.length);
        const translateX = `translate3d(${translate}%,0,0)`;
        this.options.currentItem = index;         
        this.setState({pagination : index-this.offset+1});
        return translateX    
    }   
    
    
    componentDidMount(){
      
        /*Positionne le carousel sur la première image*/
        let translate = {...this.state.currentPosition};
        translate = this.goToItem(this.offset);      
        this.setState({currentPosition : translate});
       
    }


    render(){   

        console.log('render');


        return (  
            <div className="slider rootInner">
                <FiChevronLeft onClick={this.prev}  className="carousel__nav carousel__prev"/>
                <FiChevronRight onClick={this.next} className="carousel__nav carousel__next"/>
               
                
                <div id="carousel" className="carousel">
                    <div className="carousel__container" 
                    style={{
                        width : this.widthContainer ,
                        transform : this.state.currentPosition,
                        transition : this.state.transition
                    }}>
                            
                    {this.items.map((item, key) =>(
                        <div key={key} data-index={key} className="carousel__item" style={{width : this.widthEl}}>
                            <p   className='flexImg'>
                                    <img   src={item} alt="" className="imgFlex" />
                            </p>
                        </div>
                    ))}   
                    
                    
                    </div>
                </div>
                <p className="pagination">{this.state.pagination}/{this.count}</p>
            </div>
        )          
       
    }
}








