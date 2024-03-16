import os

def rename_photos():
    path = "C:/Users/pfowler24/Desktop/Photo"
    prefix = input("What prefix do you want? ")

    i = 1
    for filename in os.listdir(path):
        extension = filename.split(".")[1].lower()
        if extension in ["jfif", "png", "gif"]:
            print(filename)

            source = path + "/" + filename
            destination = path + "/" + prefix + str(i) + "." + extension

            os.rename(source, destination)
            i += 1
rename_photos()