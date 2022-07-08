// import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters}) => {
    // you can destructure right at the parameter place
    // const {monsters} = this.props
    return (
        <div className = "card-list">
            {monsters.map((monster) => {
                // const { name, email, id } = monster;
                // <h1 key={monster.id}>{monster.name}</h1>
                // create a card component
                return <Card key= {monster.id} monster= {monster}/>;
            })}
        </div>
    )
}

export default CardList;