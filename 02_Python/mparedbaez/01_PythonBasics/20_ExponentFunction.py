
def raiseToPower(baseNum, powNum):
    result = 1
    for index in range(powNum):
        result = result * baseNum
    return result

print(raiseToPower(2,3))