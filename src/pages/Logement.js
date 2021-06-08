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


     /*   let test = []
         test[0] = '../img/test/img--0.jpg'
         test[1] = '../img/test/img--1.jpg'
         test[2] = '../img/test/img--2.jpg'
         test[3] = '../img/test/img--3.jpg'
         test[4] = '../img/test/img--4.jpg'
         test[5] = '../img/test/img--5.jpg'
         test[6] = '../img/test/img--6.jpg'
         test[7] = '../img/test/img--7.jpg'
         test[8] = '../img/test/img--8.jpg'
         test[9] = '../img/test/img--9.jpg'
         test[10] = '../img/test/img--10.jpg'
         test[11] = '../img/test/img--11.jpg'*/


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
              <DropList title="Description" content={description} status="open" data-option="multiple"/>
              <DropList title="Equipements" content={equipments}  status="open" data-option="multiple"/>
              </section>
            </>
          )
        }
    }
}