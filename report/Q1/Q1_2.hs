import Data.Char

-- 行末に数字も出力
countWords [] = []
countWords (x:xs) = x ++ " " ++ show (length (words x)) ++ "\n" ++ countWords xs

main = do
  -- すべてのテキストを受け取る
  text <- getContents
  -- 各行ごとに区切る
  let n = lines text
  putStr (countWords n)
