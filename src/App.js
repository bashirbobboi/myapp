import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      searchField: '',   
    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(() => {
        return {companies: users}
      }, 
      () => {
        console.log(this.state);
      }
    )
  );
  }

  onSearchChange = (event) => {
          console.log('event.target.value')
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return {searchField};
          })
        }

  render() {
    console.log('render');
    const {companies, searchField} = this.state;
    const {onSearchChange} = this;
    
    const result = companies.filter((company) => {
            return company.name.toLocaleLowerCase().includes(searchField)
          } )

    return (
    <div className="App">
      
      <SearchBox
        className = 'monsters-search-box' 
        onChangeHandler={onSearchChange}
        placeholder='Search Companies' 
      />
      <CardList companies = {result}/>
    </div>
  );



  }
  
}

export default App;
