import { GET_NUMB} from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_NUMB:
            if (!state.numb) {
                state.numb = 0;
            }
            console.log(state.numb + 1);
            return { ...state, numb: state.numb + 1 };
        default:
            return state;
    }
}