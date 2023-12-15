file = open('4-exe.txt', 'r')
lines = file.readlines()

num = 0
change = 0
numwin = 0

for line in lines:
    tim = line.split('|')
    bob = tim[0]
    saul = tim[1]
    change = 0
    for x in bob:
        #numwin = 0
        if x.isdigit():
            if change != len(bob):
                if bob[change + 1].isdigit():
                    checknum = str(x + bob[change + 1])
        change += 1
    print(numwin)