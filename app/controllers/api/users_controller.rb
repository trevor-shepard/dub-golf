class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.create(username: params[:username])

        if @user.save()
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 400
        end
    end

    def index
        @users = User.all
        


    end
end
