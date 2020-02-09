import sys

def hoge(n) :
  i = 1
  sum = 0
  while i <= n :
    sum = sum + i
    if sum > 21 :
      sum = 0
      break
    i += 1
  return sum


num = int(sys.argv[1])

for n in range(num) :
  print('num ', n, ' is ', hoge(n))