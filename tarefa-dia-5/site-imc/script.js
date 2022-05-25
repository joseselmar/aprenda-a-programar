
const calculoIMC = (peso, altura) => {
    //Faça o cálculo do IMC nesta função. Não esqueça de retornar o valor do cálculo com o comando 'return'.
    let imc = peso / (altura * altura)
    return(imc)
    
}

const resultadoIMC = (indiceIMC) => {
    //Retorne o resultado do IMC nesta função. A função deve retornar "Baixo peso", "Normal", "Sobrepeso" ou "Obesidade" de acordo com o índice (indiceIMC) recebido como parâmetro. Ou seja, utilize comandos 'if' para verificar em qual faixa o índice está para retornar o texto adequado.
    let msg = "sem indice a ser calculado "
    
       if (indiceIMC < 18.5) {
            msg = 'Baixo peso'
        }
        else if (indiceIMC >= 18.5 && indiceIMC < 30){
            msg = 'Normal'
        }
        else if(indiceIMC >= 30 && indiceIMC<40){
            msg = 'Sobrepeso'
        }
        else{
            msg = 'Obesidade'
      }
      return(msg)

}



const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)


        let imc = calculoIMC(peso, altura)
        document.getElementById("resultado").innerText = "O seu IMC é: " + imc

        let faixaIMC = resultadoIMC(imc)
        alert("Sua faixa de IMC é: " + faixaIMC);


    
}
