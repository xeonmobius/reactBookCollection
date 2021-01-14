import React from 'react';
import './Table.css'
import DeleteBookBtn from './DeleteBookBtn';



const Table = ({bookCollection, saveBookCollection}) => {

    // Get the entries of bookCollection so we can print out its values later
    const map = new Map(Object.entries(bookCollection));
    const bookEntries = [...map.values()]

    // Delete an entry and save it to the state
    const deleteBook = (title) => {
        let newBookCollection = {...bookCollection}
        delete newBookCollection[title]
        saveBookCollection(newBookCollection)
    }

    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Comments</th>
                <th></th>
            </tr>
            {bookEntries.map((entry) => {
                return (
                    <tr>
                        <td>{entry.date}</td>
                        <td>{entry.title}</td>
                        <td>{entry.author}</td>
                        <td>{entry.rating}</td>
                        <td>{entry.comment}</td>
                        <td><DeleteBookBtn 
                                title={entry.title}
                                deleteBook={deleteBook}
                            />
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table;