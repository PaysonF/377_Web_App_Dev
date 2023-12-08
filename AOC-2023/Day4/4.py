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
        if x.isdigit():
            if bob[change - 1].isdigit():
                numwin = int(temp + x)
                #print(numwin)
            temp = x
            if numwin == 0 and bob[change + 1].isdigit() == False:
                numwin = x
                print(numwin)
            if x == bob[5] and change == 5:
                print(bob[5])
        if change != len(bob):
            change += 1
            
