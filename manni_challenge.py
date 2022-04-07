import re

text = "Hi Manni! Th4is is va9lid but contains nu9mbers"
letters = ['h', 'i', 'm', 'a', 'n', 't', 's', 'v', 'l', 'd', 'b', 'u', 'c', 'o', 'm', 'e', 'r']

def solution(text, letters):
    num = 0
    word_list = text.split()
    for word in word_list:
        if all(
            character.lower() in letters for character in word
            if character.isdigit()
        ):
            num -= 1
        elif all(
            character.lower() in letters for character in word
            if character.isalpha()
        ):
            num += 1
        
    return num
    
return_value = solution(text, letters)
print(return_value)




    # result_value = 0
    # # to combine all the letters into a string
    # letter_string = "".join([str(item) for item in letters])

    # # to remove all special characters from the string
    # for k in text.split("\n"):
    #     new_text = re.sub(r"[^a-zA-Z0-9]+", ' ', k)
    #     nt = new_text.split()
    # # for word in text 
    # for n in nt:
    #     for letter in letter_string:
    #         if letter_string not in n:
    #             result_value -= 1
    #         else:
    #             # if isalpha() is true
    #             if n.isalpha():
    #                 result_value += 1
    #             # if isalpha() is not true - 1

    #     print(result_value)

# result_value = solution(text, letters)