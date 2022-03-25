# Description:
# Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

# Rules:
# Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
# Strings will consist of uppercase letters only
# Only two groups to a fight.
# Group whose total power (A + B + C + ...) is bigger wins.
# If the powers are equal, it's a tie.
# Examples:
#   battle("ONE", "TWO"); // => "TWO"`
#   battle("ONE", "NEO"); // => "Tie!"


def battle(x, y):
    num_x = 0
    num_y = 0
    
    for char in x:
        num = ord(char) - 64
        num_x = num_x + num

    for char in y:
        num = ord(char) - 64
        num_y = num_y + num
        print(num_y)
        

    return x if num_x > num_y else y if num_y > num_x else "Tie!"