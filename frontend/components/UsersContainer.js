import { connect } from 'react-redux'

import {fetchUsers} from '../actions/user_actions'

import Users from './Users'

const mSTP = (state) => ({
    users: state.users
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mSTP, mDTP)(Users)