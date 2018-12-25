
def square_num(nums):
    for i in nums:
        yield (i*i)

my_nums = square_num([1, 2, 3, 4, 5])

for num in my_nums:
    print(num)
