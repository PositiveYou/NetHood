export default (state = {}, action) => {
    switch (action.type) {
        //  Specify the actions the user mey activiate.
        case 'LOGIN':
            return state.name = action.name;
        default:
            return state.name = 'guest';
    }
}