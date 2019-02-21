class Api::AnswersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @answer = Answer.create(user_id: params[:user_id], question_id: params[:question_id], body: params[:body])

        if @answer.save
            render json: { status: 'great job'}
        else
            render json: @answer.errors.full_messages, status: 400
        end
    end
    
end
