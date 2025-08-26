import { Component } from "react";

import './card-list.styles.css';

class CardList extends Component {

    render () {
        const {companies} = this.props;
        return (
            <div className='card-list'>
                {companies.map((company) => {
                    const {name, email, id} = company;
                    return (
                    <div className='card-container' key={id}>
                        <img alt={`company ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                )})}
            </div>
        )
    }
}

export default CardList;