import * as ApiUtil from '../util'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

export const recieveQuestions = questions => ({
    type: RECIEVE_QUESTIONS,
    questions
})


export const fetchQuestions = () => dispatch => (
    ApiUtil.fetchQuestions()
    .then(
        (response) => dispatch(recieveQuestions(response))
    )
)