file = open('day3.txt', 'r')
lines = file.readlines()
LetterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
threelist = []
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
    total = 0
    for line in lines:
        pos = 0
        threelist.insert(i, line)
        if len(threelist) == 3:
            A = threelist[0]
            B = threelist[1]
            C = threelist[2]
            for x in range(3):
                if len(threelist[x]) > pos:
                    pos = x
                    print(pos)
                    
            if pos == 0:
                for letter in A:
                    if letter in B and C:
                        break
            elif pos == 1:
                for letter in B:
                    if letter in A and C:
                        break
            else:
                for letter in C:
                    if letter in A and B:
                        break
            if ord(letter) < 96:
                total += ord(letter) - 38
            else:
                total += ord(letter) - 96
            threelist.clear()
        i+=1
    print(total)
          
#first_part()
second_part()