import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {username: ''}

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(oldProps) {
        if (this.props.user) {
            this.props.history.push('/questions')
        }
    }


    handleInput(e) {
        this.setState({username: e.target.value})
    }

    handleSubmit(e) {
        
        if (this.state.username.length > 3) {
            this.props.createUser(this.state.username)
        } else {
            this.setState({error: 'Too short dummy'})
        }
    }
    
    
    render() {
        let message
        if (this.state.error) {
            message = <div>{this.state.error}</div>
        }

        return(
            <div>
                <h1>What's your name you little punk?</h1>

                {message}
                
                <input type="text" onChange={this.handleInput}/>


                <input type="button" value="Submit" onClick={this.handleSubmit} />
                
            </div>
        )
    }
}

export default Splash