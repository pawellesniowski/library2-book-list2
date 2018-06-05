import {CONSTANS} from "../constans";

export const addBook = title => {
    return {
        type: CONSTANS.ADD_BOOK,
        payload: {title, description: "Loren ipsum book, this, is just description demo for this book."}
    };
};


export const removeBook = book => {
    return {
        type: CONSTANS.REMOVE_BOOK,
        payload: book
    };
};

export const showDetails = book => {
    return {
        type: CONSTANS.SHOW_DETAILS,
        payload: book
    }
};

