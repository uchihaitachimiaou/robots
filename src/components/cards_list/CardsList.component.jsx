import {React} from 'react';
import Card from './Card.component';

const CardsList =({filteredMonsters})=> {
  let monstersList = filteredMonsters.map(monster => {
    return (
      <div key={monster.id}>
        <Card monster={monster} />
      </div>
    )
  });

  return(
    <div>
      <h2>cards list</h2>
      <div>{monstersList}</div>
    </div>
  )
};

export default CardsList;