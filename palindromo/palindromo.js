const palavra=prompt("Digite a palavra: ");
let palavraInvertida="";

for(let i=palavra.length - 1; i >= 0; i--){
   palavraInvertida+=palavra[i]

}

/*let i recebe o valor total de caracteres 
dentro da variavel palavra e tira 1 pq começa contando com zero.

palavraInvertida vai ser concatenada com a variavel palavra na posição atual de i

*/



if(palavra===palavraInvertida){

    alert(palavra + " é um palindromo!");
}else {
    alert(palavra + " não é um palindromo!\n\n" + palavra + "!==" + palavraInvertida);

    }