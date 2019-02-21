import { connect } from 'react-redux'

import Questions from './Questions'

import { fetchQuestions } from '../actions/question_actions'
import { createUser } from '../actions/user_actions'
import { createAnswer } from '../util/api_util'

const mSTP = (state) => ({
    user: state.user,
    questions: state.questions
})

const mDTP = dispatch => ({
    createUser: (username) => dispatch(createUser(username)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    createAnswer: createAnswer
})

export default connect(mSTP, mDTP)(Questions)