from enum import Enum

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

class Exercise:
    def __init__(self, name: str, difficulty: ExerciseDifficulty, bodyareas: list[ExerciseBodyArea]):
        self.name: str = name
        self.bodyarea: list[ExerciseBodyArea] = bodyareas
        self.difficulty = difficulty

class Set:
    def __init__(self, num_reps: int, weight: int):
        self.num_reps = num_reps
        self.weight = weight

class Workout:
    def __init__(self, exercises: list[tuple[Exercise, list[Set]]]):
        self.exercises = exercises