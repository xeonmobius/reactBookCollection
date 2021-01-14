import React, {useState, useEffect} from 'react';
import './App.css';

import Table from './components/Table';
import AddBook from './components/AddBook';

const App = () => {
  // Create bookCollection as a state value
  const [bookCollection, setCollection] = useState(new Map());

  // Create a handler function that saves state and to local storage
  const saveBookCollection = (newBookCollection) => {
    setCollection(newBookCollection);
    window.localStorage.setItem('bookCollection', JSON.stringify(newBookCollection));
  }

  // Activate once the component has loaded
  useEffect(() => {

    // Get any book collection in local storage
    let bookStorage = window.localStorage.getItem('bookCollection');

    // Load the storage object if its not null
    if (bookStorage !== null) {

      // Local Stoage exists
      let jsonCollection = JSON.parse(bookStorage);
      console.log('Found bookCollection in local storage.', jsonCollection);
      setCollection(jsonCollection);
    } 
  }, []);

  return (
    <div className="App">
      <h1>Books I have Read.</h1>
      <AddBook
        bookCollection={bookCollection}
        saveBookCollection={saveBookCollection}
      />
      <Table 
        bookCollection={bookCollection}
        saveBookCollection={saveBookCollection}
      />
    </div>
  )
}

export default App;
