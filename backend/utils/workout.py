from enum import Enum
from langchain.pydantic_v1 import BaseModel, Field

class ExerciseBodyArea(Enum):
    CHEST = 0
    SHOULDERS = 1
    BACK = 2
    ARMS = 3
    CORE = 4
    LEGS = 5

class ExerciseDifficulty(Enum):
    BEGINNER = 0
    INTERMEDIATE = 1
    EXPERT = 2

class Set(BaseModel):
    num_reps: int = Field("The number of reps to be done, if applicable. If it's a time-based exercise, \
                          set this field to 0")
    weight: int = Field("The weight (in lbs) to be used for the exercise, if applicable. If it's a \
                        time-based or body weight exercise, set this field to 0")
    time: float = Field("How long (in minutes) to perform this exercise for, if applicable. If it's a rep-based exercise, \
                        set this field to 0")
    rest: int = Field("How long to rest after this set, in seconds")

class Exercise(BaseModel):
    name: str = Field(description="The name of the exercise")
    bodyareas: list[ExerciseBodyArea] = Field(description="The body areas that the exercise targets. \
                                Possible values are chest, shoulders, back, arms, core, and legs")
    difficulty: ExerciseDifficulty = Field(description="The difficulty level of the exercise. \
                                           Possible values are beginner, intermediate, and expert")
    sets: list[Set] = Field(description="The list of sets to be done for this exercise")

class Workout(BaseModel):
    exercises: list[Exercise] = Field(description="The list of exercises to be done for the workout")