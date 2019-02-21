import { RECIEVE_QUESTIONS } from '../actions/question_actions'

const questionReducer = (state=[], aciton) => {
    switch(aciton.type) {
        case RECIEVE_QUESTIONS:
            return aciton.questions
        default:
            return state;
    }
}

export default questionReducer;