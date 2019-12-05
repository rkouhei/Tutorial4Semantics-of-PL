import Data.Char

main = do { s <- getContents;
  putStr (map toLower s);
  putStr (map toUpper s) }