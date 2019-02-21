import { combineReducers } from 'redux';

import userReducer from './user_reducer'
import usersReducer from './users_reducer'
import questionsReducer from './questions_reducer'

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    questions: questionsReducer
});
export default rootReducer