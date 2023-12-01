file = open('1-exe.txt', 'r')
lines = file.readlines()

numlist = ['0','1','2','3','4','5','6','7','8','9']
rev = len(numlist)
offset = 0
checknumb = 0

total = 0


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
        # checks for second number
        for x in range(len(numlist)):
            if rev != 2:
                rev -= 1
                if checknumb == numlist[rev] and dig2 == 0:
                    dig2 = checknumb
                    print('dig2 in') 
            
        offset += 1
        if offset == len(line):
            offset = 0
            dig1 = 0
            dig2 = 0
    # adds dig1 and dig2 then prints         
    print('NEW LINE')
    total += int(str(dig1) + str(dig2))
print(total)
        