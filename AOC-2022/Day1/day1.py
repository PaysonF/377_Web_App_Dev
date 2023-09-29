file = open('day1.txt', 'r')
lines = file.readlines()


total = 0
max1 = 0
for line in lines:
    line = line.strip()
    if line =='':
        print('New Elf')
        if total > max1:
            max1 == total
        print(total)
        total = 0
    else:
        total += int(line)
        if total > max1:
            max1 = total
print('max1 is ' + str(max1))

total2 = 0
max2 = 0
for line in lines:
    line = line.strip()
    if line =='':
        print('New Elf')
        if total2 > max2 and total2 < max1:
            max2 == total2
        print(total2)
        total2 = 0
    else:
        total2 += int(line)
        if total2 > max2 and total2 < max1:
            max2 = total2
print('max2 is ' + str(max2))

total3 = 0
max3 = 0
for line in lines:
    line = line.strip()
    if line =='':
        print('New Elf')
        if total3 > max3 and total3 < max2:
            max3 == total3
        print(total3)
        total3 = 0
    else:
        total3 += int(line)
        if total3 > max3 and total3 < max2:
            max3 = total3
print('max3 is ' + str(max3))
true_total = max1+max2+max3
print('The Top Three Combined Is ' + str(true_total))


    