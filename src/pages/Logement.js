import { Component } from 'react';
import { DropList } from '../components/DropList';
import { Slider } from '../components/slider';
import { StickerInfo } from '../components/StickerInfo';

export class Logement extends Component{

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
            
            const idParam = this.props.match.params.id;                    
            const   thisData = result.find(el => el.id === idParam)

            this.setState({
              isLoaded: true,
              items: thisData
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
          this.getData('../data.json')
      }

    render(){


        const { error, isLoaded} = this.state;

        console.log(this.state.items);

        const {
          description,
          equipments,
          host,
          location,
          pictures,
          rating,
          tags,
          title
        } = this.state.items


        if(error){
          return <div>Erreur : {error.message}</div>;

        }else if(!isLoaded){
          return <div>Chargement…</div>;
        }else{

          return (
            <>
              <Slider pictures={pictures}/>
              <StickerInfo location={location} title={title} tags={tags} host={host} rating={rating}/>
              <section className="dropListContainer rootInner">
              <DropList title="Description" content={description} status="close" data-option="multiple"/>
              <DropList title="Equipements" content={equipments}  status="close" data-option="multiple"/>
              </section>
            </>
          )
        }
    }
}