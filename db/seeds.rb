# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

trev = User.create(
    username: 'trev-trev'
)


Question.destroy_all

q1 = Question.create(
    body: 'What do you look for in an ideal pub golf teammate?'
)
q2 = Question.create(
    body: 'What is the smelliest you have ever been?'
)
q3 = Question.create(
    body: "What's the proudest you've ever been of yourself?"
)
q4 = Question.create(
    body: "If everything you said was overdubbed in a celebrity's voice for the rest of your life, who would you choose?"
)
q5 = Question.create(
    body: "Would you rather every song you ever hear gradually turn into All Star by Smash Mouth, or every movie you ever see gradually turn into Shrek?"
)
q6 = Question.create(
    body: "Would you rather orgasm every time you heard Smooth by Santana ft. Rob Thomas, or have Smooth by Santana ft. Rob Thomas suddenly start blasting every time you orgasmed?"
)
q7 = Question.create(
    body: "If you had to trade lives with any person of the opposite gender, who would it be?"
)
q8 = Question.create(
    body: "Who is the artist of our generation?"
)
q9 = Question.create(
    body: "Are you proud of what you had for lunch today? Why?"
)
q10 = Question.create(
    body: "Cats for hands, or dogs for feet?"
)


Answer.destroy_all

trev1 = Answer.create(
    body: 'Aubre Tibbs',
    user_id: trev.id,
    question_id: q1.id
)

trev2 = Answer.create(
    body: 'right now',
    user_id: trev.id,
    question_id: q2.id
)
trev3 = Answer.create(
    body: 'too tall',
    user_id: trev.id,
    question_id: q3.id
)
trev4 = Answer.create(
    body: 'shaq',
    user_id: trev.id,
    question_id: q4.id
)
trev4 = Answer.create(
    body: 'FUCK NO',
    user_id: trev.id,
    question_id: q5.id
)




