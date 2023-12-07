file = open('2.txt', 'r')
lines = file.readlines()

addIds = 0
Possible = True
thing = 0
PowerTotal = 0

for line in lines:
    Possible = True
    maxblue = 0
    maxred = 0
    maxgreen = 0
    for round in line.split(':')[1].split(';'):
        for color_count in [ x.strip() for x in round.split(',') ]:
            count, color = [ entry.strip() for entry in color_count.split(' ')]
            if color == 'blue' and int(count) > 14 or color == 'red' and int(count) > 12 or color == 'green' and int(count) > 13:
                Possible = False
            if color == 'blue' and int(count) > maxblue:
                maxblue = int(count)
            if color == 'red' and int(count) > maxred:
                maxred = int(count)
            if color == 'green' and int(count) > maxgreen:
                maxgreen = int(count)
            SubPowerTotal = maxblue * maxred
            SubPowerTotal *= maxgreen
        PowerTotal += SubPowerTotal
    if Possible == True:
        addIds += thing       
    thing += 1
print('Addids Total: ' + str(addIds))
print('Power total: ' + str(PowerTotal))        
                
                