const INITIAL_STATE = {
    details: [
        {
            contractEffective: '',
            contractEnd: '',
        },
        {
            contractEffective: 'test',
            contractEnd: '',
        },
        {
            contractEffective: '',
            contractEnd: '',
        },
    ],
    data: 'welcome'
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}