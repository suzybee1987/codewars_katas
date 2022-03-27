# class Dog:
#     # class attribute 
#     species = "Canis familiaris"

#     # instance attribute
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age 

#     # instance method
#     def __str__(self):
#         return f'{self.name} is {self.age} years old'
    
#     def speak(self, sound):
#         return f'{self.name} says {sound}'

# buddy = Dog("Buddy", 10)
# alfie = Dog("Alfie", 4)
# alfie.speak("Feed me")

# print(alfie.age)
# print(alfie.speak("FEED ME!"))
# print(alfie)

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} is {self.age} years old"

    def speak(self, sound):
        return f"{self.name} says {sound}"


class GoldenRetriever(Dog):
    def speak(self, sound="Bark"):
        return super().speak(sound)

charlie = GoldenRetriever("Charlie", 4)
print(charlie.speak)