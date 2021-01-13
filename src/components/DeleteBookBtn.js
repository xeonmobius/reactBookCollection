import React from 'react';

const DeleteBookBtn = ({title, deleteBook}) => {
    return (
        <button onClick={() => deleteBook(title)}>Delete</button>
    )
}

export default DeleteBookBtn;