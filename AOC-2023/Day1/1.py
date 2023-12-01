file = open('1-exe.txt', 'r')
lines = file.readlines()
#use if isdigit()
numlist = ['0','1','2','3','4','5','6','7','8','9']
tsilmun = numlist[::-1]
print(tsilmun)
rev = len(numlist)
offset = 0
checknumb = 0

total = 0
truetotal = 0

dig1 = 0
dig2 = 0

for line in lines:
    line = line.strip()
    for i in line:
        checknumb = line[offset]
        print(checknumb)
        # checks for first number
        for x in range(len(numlist)):
            if checknumb == numlist[x] and dig1 == 0:
                dig1 = checknumb
                print('dig1 in')
            if checknumb == tsilmun[x] and dig2 == 0:
                dig2 = checknumb
                print('dig2 in')
        offset += 1
        if offset == len(line):
            offset = 0
    # adds dig1 and dig2 then prints         
    print('NEW LINE')
    total = str(dig1) + str(dig2)
    print(total + 'wow')
    truetotal += int(total)
    dig1 = 0
    dig2 = 0
print(truetotal)

        