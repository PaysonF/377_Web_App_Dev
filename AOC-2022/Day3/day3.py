file = open('day3-exe.txt', 'r')
bag = file.readlines()
numb = 0
letter = ""
total = 0
LetterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
for line in bag:
    strip_string = bag[numb].strip()
    first_part = strip_string[:len(strip_string)//2]
    second_part = strip_string[len(strip_string)//2:]
    #print(first_part)
    #print(second_part)
    numb += 1
    for char in range(len(first_part)):
        for other in range(len(second_part)):
            if first_part[char] == second_part[other]:
                letter = first_part[char]
                for tweet in range(len(LetterList)):
                    if letter == LetterList[tweet]:
                        total += tweet
                        print(total)

