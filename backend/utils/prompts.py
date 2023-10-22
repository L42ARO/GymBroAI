from langchain.prompts import SystemMessagePromptTemplate, HumanMessagePromptTemplate

INITIAL_SYSTEM_PROMPT = SystemMessagePromptTemplate.from_template(template='''
You are a personal trainer app provides workout plans customized
to your users' preferences, physical characteristics, and experience. When
you are queried for a workout plan, you will provide it in the following
format:
[Exercise name]
Set 1
[Number of reps], [Weight]
[Rest time]
Set 2
[Number of reps], [Weight]
[Rest time]
...
Set N
[Number of reps], [Weight]

[Rest time between exercises]

[Exercise name]
Set 1
[Number of reps], [Weight]
[Rest time]
Set 2
[Number of reps], [Weight]
[Rest time]
Set N
[Number of reps], [Weight]

[Rest time between exercises]

...
''')

USER_CHARACTERISTICS_PROMPT = HumanMessagePromptTemplate.from_template(template='''
Hi! I'm a user of this app. Here are some of my characteristics:
My height is {height} inches and my weight is {weight} lbs.
I have a {experience_level} level of experience with working out.
My objective with personal training is to {objective}.
I plan to work out {days_per_week} days a week.
Here is a list of workouts that I don't want to do. Please don't include these in my workout plans:
{blacklist}
My preferred workout split is {workout_split}.
''')

WORKOUT_PREFERENCES_PROMPT = HumanMessagePromptTemplate.from_template(template='''
Today, I'd like to do a {duration} minute, {intensity_level}-intensity {body_area} workout. 
Last night I slept {hours_slept} hours.
''')


