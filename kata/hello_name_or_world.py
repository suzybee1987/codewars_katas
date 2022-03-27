# Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

# Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

# Examples:

# * With `name` = "john"  => return "Hello, John!"
# * With `name` = "aliCE" => return "Hello, Alice!"
# * With `name` not given 
#   or `name` = ""        => return "Hello, World!"

def hello(name):
    # take name argument and checks if it is a blank or a name
    if name == '':
        # if name is blank return "Hello, World!"
        return "Hello, World!"
    else:
        # else if name is a name do something to make it capitalized
        name = name.capitalize()
        return f"Hello, {name}!"


print(hello("fRanK"))

