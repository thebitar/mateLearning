#Crear una función que nos devuelva el número más alto que ingresemos

def max_num(n1, n2, n3):
    if n1 >= n2 and n1 >= n3:
        return n1
    elif n2 >= n1 and n2 >= n3:
        return n2
    else: 
        return n3

print(max_num(322,48,5))
