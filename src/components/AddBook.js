import React from 'react';

const AddBook = ({bookCollection, saveBookCollection}) => {

    const addNewBook = (event) => {
        event.preventDefault();
        const bookEntry = {
            date: document.getElementById("date") === null ? "" : document.getElementById("date").value,
            title: document.getElementById("title") === null ? "" : document.getElementById("title").value,
            author: document.getElementById("author") === null ? "" : document.getElementById("author").value,
            rating: document.getElementById("rating") === null ? "" : document.getElementById("rating").value,
        }

        const newBookCollection = {...bookCollection}

        console.log('Adding Book to collection ')
        newBookCollection[bookEntry.title] = bookEntry
        saveBookCollection(newBookCollection)
        console.log('New Book Collection', newBookCollection)
    }
    
    return (
        <div>
            <form onSubmit={addNewBook}>
                <label> Date </label>
                <input type="date" id="date"></input><br></br>
                <label> Title </label>
                <input type="text" id="title"></input><br></br>
                <label> Author </label>
                <input type="text" id="author"></input><br></br>
                <label> Rating (1-5)</label>
                <input type="number" min="1" max="5"></input><br></br>
                <label> Comments </label>
                <input type="text"></input><br></br>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default AddBook;