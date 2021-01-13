import React from 'react';
import DeleteBookBtn from './DeleteBookBtn';

const Table = ({bookCollection, saveBookCollection}) => {
    const map = new Map(Object.entries(bookCollection));
    const bookEntries = [...map.values()]

    const deleteBook = (title) => {
        map.delete(title)
        saveBookCollection(map)
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