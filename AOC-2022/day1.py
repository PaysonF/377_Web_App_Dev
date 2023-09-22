file = open('day1-exe.txt', 'r')
lines = file.readlines()
var total = 0
for line in lines:
    line = line.strip()

    if line =='':
        print('New Elf')
        print
    else:
        print(line)
    