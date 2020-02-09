import sys

def foo(n) :
  i = 1
  j = 1
  while i < n :
    i = i + j
    j = i - j
  return i

num = int(sys.argv[1])

for x in range(num) :
  print('num ', x, ' is ',foo(x))