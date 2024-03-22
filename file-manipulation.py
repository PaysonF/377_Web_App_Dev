import os
import shutil
def rename_photos():
    path = "C:/Users/pfowler24/Desktop/Photo"
    prefix = input("What prefix do you want? ")

    i = 1
    print("Old Files - - - - -")
    print("")
    for filename in os.listdir(path):
        extension = filename.split(".")[1].lower()

        if extension in ["jfif", "png", "gif"]:
            print(filename)

            source = path + "/" + filename
            destination = path + "/" + prefix + str(i) + "." + extension

            os.rename(source, destination)
            i += 1
    print("")
    print("Updated Files - - - - - ")
    print("")
    for filename in os.listdir(path):
        if extension in ["jfif", "png", "gif"]:
            print(filename)
def copy_file():
    original = "C:/Users/pfowler24/Desktop/Photo/photo1.jfif"
    filename, extension = original.split('.')
    for i in range(5):
        copy_filename = filename + ' - Copy' + str(i + 1) + "." + extension
        print(copy_filename)
        shutil.copyfile(original, copy_filename)
choice = ""
while choice != "rename" or choice != "clone" or choice != "copy":
    choice = input("What function do you want? ")
    if choice == "rename":
        rename_photos()
    if choice == "clone" or choice == "copy":
        copy_file()
    if choice != "rename" or choice != "clone" or choice != "copy":
        print("Entered String does not match options, try again")
        print("- - - - - - - - - -")