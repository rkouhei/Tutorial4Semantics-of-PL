import Data.Char

hoge i sum n = if i <= n then if sum+i > 21 then 0 else hoge (i+1) (sum+i) n else sum

main = do
  let i = 1
  let sum = 0
  let n = 3
  print (hoge i sum n)