file = open('2-exe.txt', 'r')
lines = file.readlines()

game_possible = True

def checkwin(ab):
    print(ab)


for line in lines:
    line = line.strip()
    line = line.split(';')
    for x in range(len(line)):
        checkwin(line)
    
print('Red Cubes:')
print('Green Cubes:')
print('Blue Cubes:')
