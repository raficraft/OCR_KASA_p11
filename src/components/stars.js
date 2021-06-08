import { Component } from 'react';
import {IoStarSharp} from 'react-icons/io5'

export class Stars extends Component{

    render(){

        const rating = []

        for (let i = 1; i < 6; i++) {

            if(i < this.props.rating){
                rating.push(<IoStarSharp  className="star ratingValid"/>)
            }else{
                rating.push(<IoStarSharp  className="star rating"/>)
            }
        }


        return ( 

          <div className="ratingContainer">
            {rating.map((item, key) =>(
                <span key={key}>{item}</span>              
                ))}
          </div>
           
        )
    }
}