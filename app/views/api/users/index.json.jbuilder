


json.array! @users do |user|
    json.username user.username
    json.answers do 
        user.answers.each do |answer|
            json.set! answer.question.body, answer.body
        end
    end
end