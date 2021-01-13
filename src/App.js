import React, {useState, useEffect} from 'react';
import './App.css';

import Table from './components/Table';
import AddBook from './components/AddBook';

const App = () => {
  const [bookCollection, setCollection] = useState(new Map());

  const saveBookCollection = (newBookCollection) => {
    setCollection(newBookCollection);
    window.localStorage.setItem('bookCollection', JSON.stringify(newBookCollection));
  }

  useEffect(() => {
    let bookStorage = window.localStorage.getItem('bookCollection');

    if (bookStorage !== null) {
      // Local Stoage exists
      console.log('Found bookCollection in local storage.', bookStorage);
      setCollection(JSON.parse(bookStorage));
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
