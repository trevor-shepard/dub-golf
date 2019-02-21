import { RECIEVE_USERS } from '../actions/user_actions'


const usersReducer = (state=[], action) => {
    switch(action.type) {
        case RECIEVE_USERS:
            return action.users
        default:
            return state;
    }
}


export default usersReducer;