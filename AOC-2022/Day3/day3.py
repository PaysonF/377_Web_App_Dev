file = open('day3-exe.txt', 'r')
bag = file.readlines()
numb = 0
for line in bag:
    compart = bag[numb].split()
    #look up half thing code
    print(compart[0])
    #c1 = (compart[0])
    #c2 = (compart[1])
    numb += 1


