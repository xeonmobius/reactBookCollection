import React from 'react';
import './DeleteBookBtn.css'
const DeleteBookBtn = ({title, deleteBook}) => {
    return (
        <button onClick={() => deleteBook(title)}>Delete</button>
    )
}

export default DeleteBookBtn;