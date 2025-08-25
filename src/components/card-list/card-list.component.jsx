import { Component } from "react";

class CardList extends Component {

    render () {
        const {companies} = this.props;


        return (
            <div>
                {companies.map((company) => (
                    <h1 key={company.id}>{company.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;