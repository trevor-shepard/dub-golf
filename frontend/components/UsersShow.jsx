import React from 'react'

export const UserShow = ({ username, answers}) => {
    
    let content = []
    Object.keys(answers).forEach((question) =>{
        
        let item = <div>
                        <h4>{question}</h4>

                         <h5>{answers[question]}</h5>
                        </div>
        content.push(item)
    })

    return (
        <div>
            <h1>{username}</h1>
            {content}
        </div>
    )

}

export default UserShow