let N1, N2, N3, N4, Q1, Q2, Q3, Q4
N1 = prompt("numero 1: ");
N2 = prompt("numero 2: ");
N3 = prompt("numero 3: ");
N4 = prompt("numero 4: ");

Q1 = N1 * N1
Q2 = N2 * N2
Q3 = N3 * N3
Q4 = N4 * N4

if (Q3 >= 1000){
    alert ("o resultado do quadrado do terceiro numero é: " + Q3)

}else{
    alert("o resultado do quadrado do primeiro numero é: " + Q1 +
    "\no resultado do quadrado do segundo numero é: " + Q2 +
    "\no resultado do quadrado do terceiro numero é: " + Q3 +
    "\no resultado do quadrado do quarto numero é: " + Q4)
}
