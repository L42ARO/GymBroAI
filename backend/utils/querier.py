# import openai

# with open("api-key.txt") as f:
#     openai.api_key = f.read()



# def query(prompt):
#     response = openai.Completion.create( 
#         model="gpt-3.5-turbo",
#         prompt=prompt
#     )

from langchain.prompts import PromptTemplate

prompt_template = PromptTemplate.from_template(
    "Give me a workout "
)