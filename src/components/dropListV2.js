import { Component } from 'react';
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import '../css/dropList.scss';

export class DropList extends Component{

    constructor(props){
        super(props)       
     
        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow(status){
        this.props.onToggles(status)
    }
 
    viewContent(content){

        if(typeof(content) === 'string'){

            return <p>{content}</p>

        }else if(typeof(content) === 'object'){

          const cont=  
            <ul>
                {
                content.map((item, key) =>(                    
                    <li key={key}>{item}</li>
                ))
                }
            </ul>

            return cont
        }
    }

    render(){

        const {title, status, content}  = {...this.props}      
        console.log(status);

        return (      

         
            <article className="dropList" data-status={status}>
                <header>
                <h2>{title}</h2>
                <FiChevronDown className="chevron chevronDown" onClick={() => this.toggleShow("open")}/>
                <FiChevronUp   className="chevron chevronUp"   onClick={() => this.toggleShow("close")}/>
                </header>
                <article>                    
                    {this.viewContent(content)}                    
                </article>
            </article>
        )
    }
}