const INITIAL_STATE = {
    contractEffectiveDetails: [
        {
            contractEffectiveDate: '',
            contractEndDate: '',
        }
    ],
    data: ''
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}