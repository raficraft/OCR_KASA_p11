import { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component{

    render(){
        return (            
            <header className="rootHeader rootInner">
                <nav>
                    <p className="logo">
                      <Link to='/' ><img src="../img/logo.png" alt="Kasa location de logements"/></Link>
                    </p>

                    <ul>
                        <li><Link to='/' >Acceuil</Link></li>
                        <li><Link to='/about' >A propos</Link></li>
                    </ul>

                </nav>              
            </header>
        )
    }

}