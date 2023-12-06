change = 1
# exetxt
#time = [7, 15, 30]
#distance = [9, 40, 200]
# txt txt
time = [52947594]
distance = [426137412791216]
print(time)
print(distance)

query = 0
answer = 1
count = 0
stringtime = ''
stringdistance = ''

#part 1

for num in range(len(time)):
    for t in range(time[num]):
        query = (time[num] - t) * t
        if query > distance[num]:
            count += 1
    answer = answer * count
    count = 0
print(answer)

