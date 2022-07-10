import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component'
import CardList  from './components/card-list/card-list.component';
import './App.css';
// import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  // console.log( searchField );
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState('');

  console.log('render');

  useEffect(() => {
    // console.log( 'effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
    // console.log('newFilteredMonsters');
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
      // console.log({startingArray: this.state.monsters});
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

    const onTitleChange = (event) => {
      // console.log({startingArray: this.state.monsters});
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString);
    }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value)
  // }


  // console.log(filteredMonsters);

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox
          className = "monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
      />

      <br />

      <SearchBox
          className = "title-search-box"
          onChangeHandler={onTitleChange}
          placeholder="set title"
      />

      {/* <SearchBox
          onChangeHandler={onStringChange}
          placeholder="set string"
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;