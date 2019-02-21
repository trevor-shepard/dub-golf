class Api::QuestionsController < ApplicationController
    def index 
        all_questions = Question.all
        @questions = all_questions.shuffle[0...5]
    end
    
    
end
