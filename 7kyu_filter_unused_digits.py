# Given a list of integers, return the digits that are not present in any of them.

# Example:

# [12, 34, 56, 78]  =>  "09"
# [2015, 8, 26]     =>  "3479"
# Note: the digits in the resulting string should be sorted.

def unused_digits(*args):
    return "".join(number for number in "0123456789" if number not in str(args))