import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [companies, setCompanies] = useState([]); 
  const [result, setResult] = useState(companies);

  console.log("render");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setCompanies(users))
  }, [])

  useEffect(() => {
    const newResult = companies.filter((company) => {
      return company.name.toLocaleLowerCase().includes(searchField)
    });
    
    setResult(newResult);
  }, [companies, searchField])


  const onSearchChange = (event) => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString)
        } 
    

  return (
    <div className="App">
      <h1 className='app-title'>Monsters YellowPages</h1>
      
      <SearchBox
        className = 'monsters-search-box' 
        placeholder='Search Companies'
        onChangeHandler={onSearchChange} 
      />
      {<CardList companies = {result}/>}
    </div>
  )
 

}

/*class App extends Component {
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
      <h1 className='app-title'>Monsters YellowPages</h1>
      
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
*/
export default App;
