# 織田家の家系図(一部抜粋)
child(nobunaga, nobuhide).
child(nobuyuki, nobuhide).
child(oichinokata, nobuhide).

child(nobumasa, nobunaga).
child(nobutada, nobunaga).
child(nobukatsu, nobunaga).

child(hidenobu, nobutada).
child(hidenori, nobutada).

child(hidekatsu, nobukatsu).
child(nobuyoshi, nobukatsu).

grandchild(X, Z) :- child(X, Y), child(Y, Z).