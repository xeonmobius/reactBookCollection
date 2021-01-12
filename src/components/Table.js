import React from 'react';

const Table = ({bookCollection}) => {
    const drawBooks = () => {
        let rows;
        for (let key in bookCollection) {
            rows = rows+
            <tr>
                <td>{bookCollection[key].date}</td>
                <td>{bookCollection[key].title}</td>
                <td>{bookCollection[key].author}</td>
                <td>{bookCollection[key].rating}</td>
            </tr>
        }
        return rows;
    }

    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Author</th>
                <th>Rating</th>
            </tr>
            {drawBooks()}
        </table>
    )
}

export default Table;