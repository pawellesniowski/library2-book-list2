import React from 'react';

import BookListItem from "./book-list-item";

export const BookList = (props) => {

    const list = props.books.map((book) => <BookListItem book={book} key={Math.random()}/>);

    return (
        <ul>
            {list}
        </ul>
    );
};
