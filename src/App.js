import { Component } from 'react';

import logo from './logo.svg';
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
      .then((users) => this.setState(() => {
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
      <input 
        className='search-box' 
        type='search' 
        placeholder='Search Companies' 
        onChange={onSearchChange}
      />
      {
        result.map((company) => {
          return <div key={company.key}>
            <h1>{company.name}</h1>
            </div>
            
        })
      }
    </div>
  );



  }
  
}

export default App;
