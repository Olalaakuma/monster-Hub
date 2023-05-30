import React, {Component} from 'react';


import './App.css';
import { Cardlist } from  './component/cardlist/card-list';
import { Searchbox } from './component/searchbox/search-box.component';

class App extends Component{
constructor(){
super();


this.state = {

monsters: [],
searchField: ''

}


}
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=> Response.json())
.then(users => this.setState({monsters: users}))


}
render(){
const {monsters, searchField} = this.state;
const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>monsters HUB</h1>
      <Searchbox  placeholder='seach monsters' handleChange= {e => this.setState
      ({searchField: e.target.value})}/>

    < Cardlist monsters = {filterMonster}> 
  
    </Cardlist>

 
    </div>
  );
}
 
}

export default App;
