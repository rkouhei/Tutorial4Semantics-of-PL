import Data.Char

foo i j n = if i < n then foo (i+j) i n else i

main = do
  let j = 1
  let i = 1
  let n = 10
  print (foo i j n)

 
-- foo i j n = if n <= i then return ()
--   else putStrLn (show i) >>= \ _ ->
--     foo (i + j) i n

-- main = foo 1 1 10