file = open('day2.txt', 'r')
#file = open('day2-exe.txt', 'r')
lines = file.readlines()
pTotal = 0

sPoints = 0
oPoints = 0

def FirstPart(pTotal, lines, sPoints, oPoints):
    for line in lines:
        line = line.strip()
        line = line.split()
        if line[0] == "A":
            if line[1] == "X":
                oPoints = 3
                sPoints = 1
            elif line[1] == "Y":
                oPoints = 6
                sPoints = 2
            else:
                oPoints = 0
                sPoints = 3

        elif line[0] == "B":
            if line[1] == "X":
                oPoints = 0
                sPoints = 1
            elif line[1] == "Y":
                oPoints = 3
                sPoints = 2
            else:
                oPoints = 6
                sPoints = 3

        elif line[0] == "C":
            if line[1] == "X":
                oPoints = 6
                sPoints = 1
            elif line[1] == "Y":
                oPoints = 0
                sPoints = 2
            else:
                oPoints = 3
                sPoints = 3
        pTotal += oPoints + sPoints
    print(pTotal)




def SecondPart(pTotal, lines, sPoints, oPoints):
    for line in lines:
        line = line.strip()
        line = line.split()
        if line[1] == "X":
            oPoints = 0
            if line[0] == "A":
                sPoints = 2
            elif line[0] == "B":
                sPoints = 1
            else:
                sPoints = 3

        elif line[1] == "Y":
            oPoints = 3
            if line[0] == "A":
                sPoints = 1
            elif line[0] == "B": 
                sPoints = 2
            else:
                sPoints = 3

        elif line[1] == "Z":
            oPoints = 6
            if line[0] == "A":
                sPoints = 2
            elif line[0] == "B":
                sPoints = 3
            else:
                sPoints = 1
        pTotal += oPoints
        pTotal += sPoints
    print(pTotal)



#FirstPart(pTotal, lines, sPoints, oPoints)
SecondPart(pTotal, lines, sPoints, oPoints)
