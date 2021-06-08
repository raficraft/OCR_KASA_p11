import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.scss';

export class Footer extends Component{

    render(){
        return (            
            <footer>
               <p>
               <Link to='/' ><img src="../img/logoBlanc.png" alt="Kasa location de logements"/></Link>
               </p>
               <p>2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}