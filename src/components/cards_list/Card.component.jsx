import {React} from 'react';

const Card =({monster})=>{
  let picture = `https://robohash.org/set=set2/${monster.id}?size=150x150`;
 return(
    <div className="card">
      <h3>{monster.name}</h3>
      <img src={picture} alt="" />
      <p>{monster.email}</p>
    </div>
  )
};

export default Card;