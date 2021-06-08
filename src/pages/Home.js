import { Component } from 'react';
import { Hero } from '../components/Hero';
import { Sticker } from '../components/Sticker';

export class Home extends Component{

    constructor(props) {
        super(props);
     
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
      }

       getData(url){
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }

      componentDidMount() {
          this.getData('data.json')
      }


    render(){
      
        const { error, isLoaded, items } = this.state;
        console.log(items);

        if(error){

            return <div>Erreur : {error.message}</div>;

          }else if(!isLoaded){
            return <div>Chargement…</div>;
          }else{

            return (
              <>
                  <Hero img="../img/bannerHero.jpg" content={<h1>Chez vous,<br></br>partout et ailleurs</h1>}/>
                <main className="gallery rootInner">
              
                    {items.map((item, key) =>(
                        <Sticker key={key} id={item.id} src={item.cover} title={item.title}/>
                    ))}        
                </main>   
              </> 
            )
        }
    }
}