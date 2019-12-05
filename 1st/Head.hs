main :: IO ()
main = do all <- getContents
  let ls = lines all
  putStrLn (head ls)