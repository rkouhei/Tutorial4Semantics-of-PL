import Data.Char

-- 各行ごとに
eachRow [] = []
eachRow (x:xs) = upperAndlowerWords (words x) ++ "\n" ++ eachRow xs

-- 小文字化と大文字化
upperAndlowerWords [] = []
upperAndlowerWords (x:xs) = map toLower x ++ " " ++ map toUpper x ++ " " ++ upperAndlowerWords xs

main = do
  -- すべてのテキストを受け取る
  text <- getContents
  -- 各行ごとに区切る
  let n = lines text
  putStr (eachRow n)
