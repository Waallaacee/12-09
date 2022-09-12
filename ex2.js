let H, E ,ST , S
H = prompt("digite o numero de horas trabalhas: ")
E = (H - 50) * 20
ST = 500 + E
S = H * 10
if(H>50){

    alert("salario: " + ST + "\nExcesso foi R$" + E)
}
else{
    alert("Salario é " + S)
}
