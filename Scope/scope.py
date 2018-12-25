# LEGB
# Local Enclosing Global Built-in

# x = 'global x'
#
# import builtins
#
# # print(dir(builtins))
#
# def min(list):
#     pass
# m = min([5, 4, 3, 2, 1])
# print(m)
#
# def test(z):
#
#     x = 'local x'
#     print(x)
#     print(z)
#
# test('local z')

def outer():
    x = 'outer x'

    def inner():
#        x = 'inner x'
        print(x)

    inner()
    print(x)

outer()
