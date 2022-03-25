# Write a function that checks if a given string (case insensitive) is a palindrome.

def is_palindrome(s):    
    return True if s.lower() ==  s.lower()[::-1] else False

# def is_palindrome(s):    
#     return s.lower() == s.lower()[::-1]