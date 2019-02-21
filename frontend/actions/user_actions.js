import * as ApiUtil from '../util/api_util'


export const RECIEVE_USER = 'RECIEVE_USER'
export const RECIEVE_USERS = 'RECIEVE_USERS'



export const recieveUser = user => ({
    type: RECIEVE_USER,
    user
})



export const recieveUsers = users => ({
    type: RECIEVE_USERS,
    users
})



export const createUser = (username) => dispatch => (
    ApiUtil.createUser(username)
    .then(
        (response) => dispatch(recieveUser(response))
    )
)

export const fetchUsers = () => dispatch => (
    ApiUtil.fetchUsers()
    .then(
        (response) => dispatch(recieveUsers(response))
    )
)