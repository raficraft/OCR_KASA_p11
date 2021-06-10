import { Component } from 'react';
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import '../css/dropList.scss';

export class DropList extends Component{

    constructor(props){

        super(props)
        this.state = {
            dropListStatus: this.props.status,
        };
        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow(status){
        status === 'close' ?  this.setState({dropListStatus: 'close'}) : this.setState({dropListStatus: 'open'}); 
    }
 
    viewContent(content){

        if(typeof(content) === 'string'){

            return <p>{content}</p>

        }else if(typeof(content) === 'object'){

          const cont =  
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

        return (  
            <article className="dropList" data-status={this.state.dropListStatus}>
                <header>
                <h2>{this.props.title}</h2>
                <FiChevronDown className="chevron chevronDown" onClick={() => this.toggleShow('open')}/>
                <FiChevronUp   className="chevron chevronUp"   onClick={() => this.toggleShow('close')}/>
                </header>
                <article>                    
                    {this.viewContent(this.props.content)}                    
                </article>
            </article>
        )
    }
}