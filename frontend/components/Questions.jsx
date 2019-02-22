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
            error = <div className='error'>{this.state.error}</div>
        }
        return(
            <div className='container'>
                <h1 className='title'>{this.state.currQuestion? this.state.currQuestion.body : null}</h1>
                {error}
                <textarea className='input' id='answer-input' rows='4' onChange={this.handleInput} />
                <input className='submit' type="button" value="Submit" onClick={this.handleSubmit} />
            </div>
        )
    }


}


export default Questions