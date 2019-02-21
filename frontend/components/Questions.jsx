import React from 'react'

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (!Object.values(this.props.user).length) {
            this.props.history.push('/')
        } else {
            this.props.fetchQuestions()

        }
    }

    componentDidUpdate(oldProps) {
        if (this.props.questions !== oldProps.questions) {
            
            let questions = this.props.questions.slice()
            let currQuestion = questions.pop()
            this.setState({
                questions,
                currQuestion
            })
        }
    }

    handleInput(e) {
        this.setState({answer: e.target.value})
    }

    handleSubmit(e) {
        if (this.state.answer.length > 1) {
            this.props.createAnswer(this.state.answer, this.props.user.id, this.state.currQuestion.id)
            .then(
                (response) => {
                    if (!this.state.questions.length) this.props.history.push('/finished')
                    
                    let questions = this.state.questions
                    let currQuestion = questions.pop()
                    this.setState({
                        questions,
                        currQuestion
                    })
                }
            )
        } else {
            this.setState({error: 'Too short dummy'})
        }
        document.getElementById('answer-input').value = ''
    }

    render() {
        let error
        if (this.state.error) {
            errror = <div>{this.state.error}</div>
        }
        return(
            <div>
                <h1>{this.state.currQuestion? this.state.currQuestion.body : null}</h1>
                {error}
                <input id='answer-input' type="text" onChange={this.handleInput} />
                <input type="button" value="Submit" onClick={this.handleSubmit} />
            </div>
        )
    }


}


export default Questions