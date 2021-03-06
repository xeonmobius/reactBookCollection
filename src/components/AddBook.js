import React from 'react';
import './AddBook.css'

const AddBook = ({ bookCollection, saveBookCollection }) => {

    const addNewBook = (event) => {
        event.preventDefault();

        // creates a book entry object that will be saved
        const bookEntry = {
            date: document.getElementById("date") === null ? "" : document.getElementById("date").value,
            title: document.getElementById("title") === null ? "" : document.getElementById("title").value,
            author: document.getElementById("author") === null ? "" : document.getElementById("author").value,
            rating: document.getElementById("rating") === null ? "" : document.getElementById("rating").value,
            comment: document.getElementById("comment") === null ? "" : document.getElementById("comment").value,
        }

        // Checks if all the fields are filled or not
        let filled = Object.values(bookEntry).every(value => value !== "")

        // add the book to the bookcollection state
        if (filled) {
            const newBookCollection = {...bookCollection}
            console.log('Adding Book to collection.')
            newBookCollection[bookEntry.title] = bookEntry
            saveBookCollection(newBookCollection)
            console.log('New Book Collection: ', newBookCollection)
        } else {
            alert("Error all fields need to be filled!")
        }
    }
    
    return (
        <div>
            <form onSubmit={addNewBook}>
                <label> Date </label>
                <input type="date" id="date" value={new Date().toISOString().slice(0,10)}></input><br></br>
                <label> Title </label>
                <input type="text" id="title"></input><br></br>
                <label> Author </label>
                <input type="text" id="author"></input><br></br>
                <label> Rating (1-5)</label>
                <input type="number" id="rating" min="1" max="5"></input><br></br>
                <label> Comments </label>
                <input type="text" id="comment"></input><br></br>
                <input type="submit" value="Add" className="addButton"></input>
            </form>
        </div>
    )
}

export default AddBook;