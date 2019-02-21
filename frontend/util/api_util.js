export const fetchQuestions = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/questions'
    })
}

export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
}

export const createUser = username => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { username }
    })
}

export const createAnswer = (body, user_id, question_id) => {
    return $.ajax({
        method: 'POST',
        url: '/api/answers',
        data: { body, user_id, question_id }
    })
}