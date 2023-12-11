file = open('4-exe.txt', 'r')
lines = file.readlines()

change = 0
numwin = 0

for line in lines:
    tim = line.split('|')
    bob = tim[0]
    saul = tim[1]
    change = 0
    for x in bob:
        numwin = 0
        if x.isdigit() and change != 5 and change != 6:
            if bob[change - 1].isdigit():
                numwin = int(str(bob[change - 1]) + str(x))
                #print(numwin)
            if bob[change - 1].isdigit() == False:
                numwin = int(x)
        print(x)
        print('Change:' + str(numwin))
        change += 1
