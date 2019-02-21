import React from 'react'

import UserShow from './UsersShow'

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    componentDidUpdate(oldProps) {
        
        if (this.props !== oldProps){

            this.setState({
                timIsABitch: true
            })
        }
    }

    render() {
        let content = []
        if (this.props.users.length) {    
            this.props.users.forEach((user) => {
                if (!user.answers) return
                content.push(<UserShow username={user.username} answers={user.answers} />)
            })
        }
        return(
            <div>
                {content}
            </div>
        )
    }
}

export default Users