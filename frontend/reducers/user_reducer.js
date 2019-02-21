import { RECIEVE_USER } from '../actions/user_actions'


const userReducer = (state={}, action) => {
    switch(action.type) {
        case RECIEVE_USER:
            return action.user
        default:
            return state;
    }
}



export default userReducer;