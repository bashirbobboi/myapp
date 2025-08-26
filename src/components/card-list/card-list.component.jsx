import { Component } from "react";
import Card from "../card/card.component";

import './card-list.styles.css';

class CardList extends Component {

    render () {
        const {companies} = this.props;

        return (
            <div className='card-list'>
                {companies.map((company) => {
                    
                    return (
                      <Card company={company}/>
                );
                })}
            </div>
        )
    }
}

export default CardList;