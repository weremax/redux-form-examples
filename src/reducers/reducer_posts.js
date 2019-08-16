import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

const INITIAL_STATE = {
    numb: 0,
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        /*case DELETE_POST:
            return _.omit(state, action.payload);*/
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}