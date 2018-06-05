import React from 'react';

import { connect } from 'react-redux';

import { removeBook, showDetails } from '../actions/actionsCreators';

const BookListItem = (props) => {
    return (
        <li>
           {props.book.title}
           <button onClick={()=>props.handleShowDetails(props.book)}>Show details</button>
           <button onClick={()=>props.handleRemoveBook(props.book)}>Remove book</button>
        </li>
    )
};

function mapDispatchToProps (dispatch) {
    return ({
        handleRemoveBook: (book) => dispatch(removeBook(book)),
        handleShowDetails: (book) => dispatch(showDetails(book))
    });
}

export default connect(null, mapDispatchToProps)(BookListItem);




