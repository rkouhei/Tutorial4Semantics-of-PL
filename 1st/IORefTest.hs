import Data.IORef

ioRefTest r = readIORef r >>= \ i ->
  if i <= 0 then return ()
  else putStrLn (show i)    >>= \ _ ->
    writeIORef r (i - 1) >>= \ _ ->
    ioRefTest r

main = newIORef 10 >>= \ r ->
  ioRefTest r