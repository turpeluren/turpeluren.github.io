#Month, year
#enter month and year and get sequence for copying into dbild.js array

mon = input("Month: ")
year = input("Year: ")
missingdays = input("Any missing days: ") #space separated
imgurhtml = input("ImgurHTML: ")

imgurhtml = imgurhtml.split('imgur.com/')
missingdays = missingdays.split(" ")
sortedhtml = [None]*32
print()

#gör imgurhtml tillräckligt lång så inget fuckar (om dagar saknas)
for i in range(32-len(imgurhtml)):
    imgurhtml.append(None)

#ordna rätt på ordningen som fuckas av imgur
offset = 0
missoffset = 0
for i in range(1,32):
    # 1 do nothing
    if i > 1 and i < 12: #mellan 10 och 19
        offset = 8
    if i == 12: #2
        offset = -10
    if i > 12 and i < 23: #mellan 20 och 29
        offset = 7
    if i == 23: #3
        offset = -20
    if i > 23 and i < 26: # 30, 31
        offset = 6
    if i >= 26: # 2 - 9
        offset = -22

    #skip the missing days
    if not str(i + offset) in missingdays:
        sortedhtml[i + offset] = imgurhtml[i - missoffset]
    else:
        sortedhtml[i + offset] = "none"
        missoffset += 1

#printa allt fint
for i in range(1,32):
    if i < len(imgurhtml) and sortedhtml[i] != "none":
        print('["'+str(i)+" "+mon+" "+year+'", "'+sortedhtml[i][:7]+'"],')
