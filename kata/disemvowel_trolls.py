def disemvowel(string_):
    vowels = ("a", "e", "i", "o", "u")
    for letter in string_:
        if letter in vowels:
            letter.replace(letter, "")
            "".join(string_)
    return string_


print(disemvowel("This website is for losers LOL!"))