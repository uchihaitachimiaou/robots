/// Monsters rolodex
/* simple app that filters and display monsters according what a users are searching for
 using an search imput field */

 // App flowchart
 /* components to create:
  1. mother component / App
  2. child component / monsters cards list
  3. child component / monster card
  4. child component / search bar (to filter monsters)
 */
  /*  fetch data and distribute it to through the app
    1. fetch data from API (placeholder)
    2. map date from API
    3. listen to users input (change) and store it into state
    3. filter data
    2. pass data as props as well as props as function
  */

import {React, Component} from 'react';
import CardsList from './components/cards_list/CardsList.component';
import SearchBox from './components/search_box/SearchBox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
  }
  filteredMonsters=()=>{
    let {monsters, search} = this.state;
    let filteredMonstersList = monsters.filter(monster=>{
      return (monster.name.toLowerCase().includes(search.toLowerCase()))
    })
    return filteredMonstersList
  }
  handleChange=(inputUser)=>{
    this.setState({search:inputUser})
  }

  render(){
    return(
      <div>
        <h1>monsters rolodex</h1>
        <SearchBox handleChange = {this.handleChange} />
        <CardsList filteredMonsters = {this.filteredMonsters()} />
      </div>
    )
  }
}

export default App;