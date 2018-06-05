import React from 'react';

import AddBookContainer from '../containers/add-book-container';
import BookListContainer from '../containers/books-list-container.jsx';
import BookDetailsContainer from '../containers/book-details-container';

export const App = () => {
    return (
        <div>
            <AddBookContainer />
            <BookListContainer />
            <BookDetailsContainer />
        </div>
    );
};
