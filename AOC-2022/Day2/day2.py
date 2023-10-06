file = open('day2.txt', 'r')
#file = open('day2-exe.txt', 'r')
lines = file.readlines()
pTotal = 0

def FirstPart(pTotal, lines):
    for line in lines:
        line = line.strip()
        line = line.split()
        if line[0] == "A":
            if line[1] == "X":
                pTotal = 3
                pTotal = 1
            elif line[1] == "Y":
                pTotal = 6
                pTotal = 2
            else:
                pTotal = 0
                pTotal = 3

        elif line[0] == "B":
            if line[1] == "X":
                pTotal = 0
                pTotal = 1
            elif line[1] == "Y":
                pTotal = 3
                pTotal = 2
            else:
                pTotal = 6
                pTotal = 3

        elif line[0] == "C":
            if line[1] == "X":
                pTotal = 6
                pTotal = 1
            elif line[1] == "Y":
                pTotal = 0
                pTotal = 2
            else:
                pTotal = 3
                pTotal = 3
        pTotal += pTotal + pTotal
    print(pTotal)




def SecondPart(pTotal, lines):
    for line in lines:
        line = line.strip()
        line = line.split()
        if line[1] == "X":
            if line[0] == "A":
                pTotal += 3
            elif line[0] == "B":
                pTotal += 1
            else:
                pTotal += 2

        elif line[1] == "Y":
            pTotal += 3
            if line[0] == "A":
                pTotal += 1
            elif line[0] == "B": 
                pTotal += 2
            else:
                pTotal += 3

        elif line[1] == "Z":
            pTotal += 6
            if line[0] == "A":
                pTotal += 2
            elif line[0] == "B":
                pTotal += 3
            else:
                pTotal += 1
    print(pTotal)



#FirstPart(pTotal, lines)
SecondPart(pTotal, lines)
