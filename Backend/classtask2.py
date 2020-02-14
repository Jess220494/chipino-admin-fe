from classtask import Superman
from classtask import Batman
from classtask import Arrow
from classtask import Flash

def function1():
    bruce = 0
    while(bruce < 5):
        print(Batman.bruce())
        bruce = bruce + 1

def function2():
    lex = []

    for hi in Superman.lois():
        if hi == "red":
            lex.append(hi)
            print(lex)
        elif hi == "kryptonite":
            print("k")
        elif hi == "green":
            print("g")
        else:
            print("others")    

def function3():
    Superman.clark()

def function4():
    Arrow.oliver()

def function5():
    Flash.barry()

function1()
function2()
function3()
function4()
function5()
