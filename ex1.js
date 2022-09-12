let peso , excesso , pesoLimite
pesoLimite = 50
peso = prompt("Digite a quantidade de Kgs de peixe que joao trouxe :")
excesso = peso - pesoLimite
multa = excesso * 4
if (peso > pesoLimite){

alert("Multa foi de " + multa)
}else{
alert ("Você tem " + peso + "Kg") 
}
