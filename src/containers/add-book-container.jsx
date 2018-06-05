import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addBook } from '../actions/actionsCreators';


class AddBookContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.handleAddButton = this.handleAddButton.bind(this);
    }

    handleAddButton() {
        // this.state.sendBookToList(this.state.title);
        this.props.sendBookToList(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <div>
                <h2>Add book to the list</h2>
                <input
                    onChange={(e)=>this.setState({title: e.target.value})}
                    value={this.state.title}
                />
                <button onClick={this.handleAddButton}>Add</button>
            </div>
        )
    }

}

// we need to dispatch an action
function mapDispatchToProps(dispatch) {
    return ({
        sendBookToList: (title)=>{ dispatch(addBook(title)) }
    })
}

export default connect(null, mapDispatchToProps)(AddBookContainer);
