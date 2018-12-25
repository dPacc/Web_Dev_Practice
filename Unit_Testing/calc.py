def addition(x,y):
    return x + y

def subtraction(x,y):
    return x - y

def multiplication(x,y):
    return x * y

def division(x,y):
    # Corner case:
    if y == 0:
        raise ValueError("Cannot divide by Zero!")
    return x / y
