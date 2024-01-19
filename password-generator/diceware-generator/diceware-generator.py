import random
word_lookup = {}

file = open('diceware-wordlist.txt', 'r')
lines = file.readlines()
for line in lines:
    if line[0].isdigit():
        code, word = line.split()
        word_lookup[code] = word


num_words = int(input('Enter Num of Words: '))
for x in range(num_words):
    password = ''
    code = ''
    for i in range(5):
        digit = random.randint(1, 6)
        code += str(digit)
    password += word_lookup[code]
    print(password)