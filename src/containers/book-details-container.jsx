import React from 'react';

import { connect } from 'react-redux';

const BookDetailsContainer = (props) => {

    if(!props.activeBook.title) {
        return <div>No data</div>
    }

    return (
        <div>{props.activeBook.title}, {props.activeBook.description}</div>
    );
};

// we get here state with active book / show book details:
function mapStateToProps (state) {
    console.log("state: ", state);
    return({
        activeBook: state.ShowBookDetails
    })
}

export default connect(mapStateToProps)(BookDetailsContainer);
