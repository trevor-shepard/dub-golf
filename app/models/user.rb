class User < ApplicationRecord
    validates :username, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}

    has_many :answers

    has_many :questions, through: :answers
    
end
