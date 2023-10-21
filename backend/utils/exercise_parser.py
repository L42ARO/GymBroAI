from workout import *

def get_exercises():
    exercises = []
    
    f = open("./backend/utils/exercises.txt", "r")
    line = f.readline()
    while line:
        name, rest = line[2:].split(" (")
        difficulty, rest = rest.split(") [")
        bodyareas = rest.split("]")[0].split(", ")

        difficulty = ExerciseDifficulty[difficulty.upper()]
        for i in range(len(bodyareas)):
            bodyareas[i] = ExerciseBodyArea[bodyareas[i].upper()]

        exercises.append(
            Exercise(
                name,
                difficulty,
                bodyareas
        ))

        line = f.readline()

    return exercises