function numeroMinimoMultiplo(num1, num2) {
  var resto, a, b

  a = num1
  b = num2

  do {
    resto = a % b

    a = b
    b = resto
  } while (b != 0)

  console.log((num1 * num2) / a)
}

return numeroMinimoMultiplo(10, 4)
// 10  4 | 2
//  5  2 | 2
//  5  1 | 5
//  1  1 | = 2.2.5 = 20

// 10 , 2


/*
MMC(3, 5)
Mínimo Múltiplo Comum

1)
3  5 | 3
1  5 | 5
1  1 | = 3.5 = 15

Prova real:
3 6 9 12 (15) 18 21 24 27 (30)
5 10 (15) 20 25 (30)

2)
10  2 | 2
 5  1 | 5
 1  1 | = 2.5 = 10

2 4 6 8 (10) 12 14 16 18 (20)
(10) (20) 30 40

ERRADO:
10  2 | 10
1   2 | 2
1   1 | = 10.2 = 20

////////////////
While (Enquanto)

while (a > 0) {
  ...
}

do {

} while (a > 0);

console.log("While")
a = -1
while (a > 0) {
  console.log(a--)
}

console.log("Do While")
a = -1
do {
  console.log(a--)
} while (a > 0);


*/