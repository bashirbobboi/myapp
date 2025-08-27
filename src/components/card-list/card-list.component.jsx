import Card from "../card/card.component";

import './card-list.styles.css';

const CardList = ({companies}) =>  (
    <div className='card-list' >
        {companies.map((company) => {           
            return (
                <Card company={company}/>);
        })}
    </div>
);

export default CardList;