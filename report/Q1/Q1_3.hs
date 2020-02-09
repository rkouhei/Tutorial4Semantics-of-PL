import Data.Char

-- 各行ごとに
eachRow [] = []
eachRow (x:xs) = headAndLast (words x) ++ "\n" ++ eachRow xs

-- 最初の文字と最後の文字を抜き出す
headAndLast [] = []
headAndLast (x:xs) = x ++ " " ++ last xs

main = do
  -- すべてのテキストを受け取る
  text <- getContents
  -- 各行ごとに区切る
  let n = lines text
  putStr (eachRow n)
