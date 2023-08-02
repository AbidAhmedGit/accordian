import './cardList.css'
import Card from '../card/card.component'

const CardList = ({ boards }) => {

    return (
        <div className="card-list">
            {boards.map((monster) => {
                return <Card key={monster.id} monster={monster} />;
            })}
        </div>
    )
}

export default CardList;