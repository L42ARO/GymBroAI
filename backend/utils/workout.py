from enum import Enum

class BodyArea(Enum):
    CHEST = 1
    SHOULDERS = 2
    BACK = 3
    ARMS = 4
    CORE = 5
    LEGS = 6

class Exercise:
    def __init__(self, name: str, bodyarea: BodyArea, ):
        self.name: str = name
        self.bodyarea: BodyArea = bodyarea

class Set:
    def __init__(self, num_reps: int, weight: int):
        self.num_reps = num_reps
        self.weight = weight

class Workout:
    def __init__(self, exercises: list[tuple[Exercise, list[Set]]]):
        self.exercises = exercises