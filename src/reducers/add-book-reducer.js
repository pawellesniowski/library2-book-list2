import {CONSTANS} from "../constans";

export default function (state=[], action) {
    switch (action.type) {
        case CONSTANS.ADD_BOOK:
            return [...state, action.payload];
        case CONSTANS.REMOVE_BOOK:
            return state.filter(element => element !== action.payload);
        default:
            return state;
    }
}
