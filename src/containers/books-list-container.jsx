import React from 'react';

import {connect} from 'react-redux';

import { BookList } from "../components/book-list";

const BookListContainer = (props) => {

    return (
        <BookList books={props.books}/>
    );

};

function mapStateToProps (state) {
    console.log("state: ", state);
    return {
        books: state.BookList
    }
}

export default connect(mapStateToProps, null)(BookListContainer);

