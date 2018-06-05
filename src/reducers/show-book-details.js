import { CONSTANS } from "../constans";

export default function (state=[], action) {
    switch(action.type){
        case CONSTANS.SHOW_DETAILS:
            return action.payload;
        default:
            return state;
    }
};
