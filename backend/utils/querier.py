from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.output_parsers import PydanticOutputParser

import prompts
from workout import *

def user_characteristics(user):
    '''
    returns the characteristics (i.e. permanent features) of the
    given user in a dictionary format, as follows:
    {
    "height": int (height in inches),
    "weight": int (weight in lbs),
    "experience_level": int (0 for beginner, 1 for intermediate, 2 for expert),
    "objective": str (),
    "days_per_week": int (from 1 to 7),
    "blacklist": list[str] (list of exercise names that are unacceptable),
    "workout_split": str (),
    }
    '''
    return {
        "height": 71,
        "weight": 135,
        "experience_level": 0,
        "objective": "build muscle",
        "days_per_week": 3,
        "blacklist": ["deadlist"],
        "workout_split": "push, pull, leg"
    }
    

def workout_preferences(user):
    '''
    returns the user's chosen preferences for today's workout (specific to
    this workout plan). Format as follows:
    {
    "duration": int (duration of exercise in minutes)
    "intensity_level": int (0 for low, 1 for medium, 2 for high),
    "body_area": int (0 for chest, 1 for shoulders, 2 for back, 3 for arms, 4 for core, 5 for legs),
    "hours_slept": float (number of hours slept last night)
    }
    '''
    return {
        "duration": 60,
        "intensity_level": "medium",
        "body_area": "chest",
        "hours_slept": 8.0
    }

parser = PydanticOutputParser(pydantic_object=Workout)

def query_workout(api_key_path: str, user):
    with open(api_key_path) as f:
        OPENAI_API_KEY = f.read()

    print(parser.get_format_instructions())

    chat_prompt_template = ChatPromptTemplate.from_messages([
        prompts.INITIAL_SYSTEM_PROMPT.format(format_instructions=parser.get_format_instructions()),
        # prompts.USER_CHARACTERISTICS_PROMPT.format(**user_characteristics(user)),
        prompts.WORKOUT_PREFERENCES_PROMPT.format(**workout_preferences(user))
    ])

    chat_model = ChatOpenAI(openai_api_key=OPENAI_API_KEY)
    response = chat_model(chat_prompt_template.format_messages())

    return response.content

response = query_workout("api-key.txt", None)
print(response)

workout = parser.parse(response)

for e in workout.exercises:
    print(e.name)