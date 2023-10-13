file = open('day3-exe.txt', 'r')
lines = file.readlines()
LetterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
total = 0
def first_part():
    total = 0
    for line in lines:
        line = line.strip()
        length = len(line)
        compartment_1 = line[:length // 2]
        compartment_2 = line[length // 2:]
        for letter in compartment_1:
            if letter in compartment_2:
                break
        if ord(letter) < 96:
            total += ord(letter) - 64 + 26
        else:
            total += ord(letter) - 96
    print(total)
def second_part():
    i = 0
    for line in lines:
        if i % 3 == 0 and i > 0:
           # bag_1 = line[i - 3]
           # bag_2 = line[i - 2]
           # bag_3 = line[i - 1]
           print(line)

        i += 1

        
        
#first_part()
second_part()