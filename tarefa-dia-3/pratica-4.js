let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let impostoNacional = 1.12;
let impostoInternacional = 1.20;

if(produtoA.internacional == true ){
    precoOriginal = produtoA.valor;
    produtoA.valor = produtoA.valor*impostoInternacional;
}else{
    precoOriginal = produtoA.valor;
    produtoA.valor = produtoA.valor*impostoNacional;
}
console.log('O preço do produto', produtoA.nome,'é: R$',produtoA.valor, 'O preco original do produto era: R$',precoOriginal)
console.log(produtoA)
console.log ("---")
if(produtoB.internacional == true ){
    precoOriginal = produtoB.valor;
    produtoB.valor = produtoB.valor*impostoInternacional;
}else{
    precoOriginal = produtoB.valor;
    produtoB.valor = produtoB.valor*impostoNacional;
}
console.log('O preço do produto', produtoB.nome,'é: R$',produtoB.valor, 'O preco original do produto era: R$',precoOriginal)
console.log(produtoB, 'O preco original do produto era: R$',precoOriginal)
console.log ("---")

if(produtoC.internacional == true ){
    precoOriginal = produtoC.valor;
    produtoC.valor = produtoC.valor*impostoInternacional;
}else{
    precoOriginal = produtoC.valor;
    produtoC.valor = produtoC.valor*impostoNacional;
}
console.log('O preço do produto', produtoC.nome,'é: R$',produtoC.valor, 'O preco original do produto era: R$',precoOriginal)
console.log(produtoC, 'O preco original do produto era: R$',precoOriginal)
console.log ("---")