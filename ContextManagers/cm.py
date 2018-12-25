from contextlib import contextmanager

# Context Manager Using Class

# class Open_File():
#
#      def __init__(self, filename, mode):
#          self.filename = filename
#          self.mode = mode
#
#      def __enter__(self):
#          self.file = open(self.filename, self.mode)
#          return self.file
#
#      def __exit__(self, exc_type, exc_val, traceback):
#          self.file.close()
#
# with Open_File('sample.txt', 'w') as f:
#     f.write('Testing')
#
# print(f.closed)

# Context Manager Using Function
@contextmanager
def open_file(filename, mode):
    try:
        f = open(filename, mode)
        yield f
    finally:
        f.close()

with open_file('sample.txt', 'w') as f:
     f.write('Context Manager with Functions')

print(f.closed)

# import sys
# print(sys.path)
