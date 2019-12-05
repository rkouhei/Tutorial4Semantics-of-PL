-- 一行読み込み、オウム返しする
main :: IO ()
main = getLine >>=
  (\ line -> putStrLn(line))

-- main = do l
--   n <- getLine
--   putStrLn ln