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
              isLoaded: false,
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

        if(error){

            return  <div className="errorMessage rootInner">
                      <p>Une erreur est survenue veuillez contacter votre administateur Réseau</p>
                      <p>Erreur : {error.message}</p>
                    </div>;

          }else if(!isLoaded){
            return <div>Chargement…</div>;
          }else{

            return (
              <>
                  <Hero img="../img/bannerHero.jpg" content={<h1>Chez vous,<br></br>partout et ailleurs</h1>}/>
                <main className="gallery rootInner">
              
                    {items.length > 0 ? (
                  
                      items.map((item, key) =>(
                      
                          <Sticker key={key} id={item.id} src={item.cover} title={item.title}/>
                        
                      ))
                    ) : (
                      <div className="errorMessage rootInner">
                        <p>Aucun résultat trouvé dans les data</p>
                       
                      </div>
                    )
                    
                    }  

                       
                </main>   
              </> 
            )
        }
    }
}