import random

SPECIALS = '!@#$%^&*()_+=-[]\|;:"<,>./?'
length = int(input('Enter Password Length:'))

password = []

for i in range(length):
    randompicker = random.randint(1, 3)
    if randompicker == 1:
        password.append(chr(random.randint(65,90)))
    elif randompicker == 2:
        password.append(chr(random.randint(97,122)))
    elif randompicker == 3:
        password.append(str(random.randint(1,10)))
    else:
        password += SPECIALS[random.randint(0, len(SPECIALS))]
        random.shuffle(password)

print("Heres your password: " + ''.join(password))
