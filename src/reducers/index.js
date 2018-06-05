import { combineReducers } from 'redux';

import addBookReducer from './add-book-reducer';
import showBookDetails from './show-book-details';

export default combineReducers({
    BookList: addBookReducer,
    ShowBookDetails: showBookDetails
});
