y = 1
x = 2
x, y = y, x
total = 0
z = 0
while z < 4000000:
    if y % 2 == 0:
        z += y
    if x % 2 == 0:
        z += x
    y += x
    x, y = y, x
print(total)
    