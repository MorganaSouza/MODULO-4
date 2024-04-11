//Math.randon()
Math.random();
parseInt(Math.random() * 10);
parseInt(Math.random() * 10 + 1);

//Claro! Vamos pensar na função Math.random() como uma máquina de sorteio que gera números aleatórios entre 0 e 1. No entanto, digamos que você queira sortear números entre 1 e 10, como em um sorteio de bingo. Para fazer isso, você precisa ajustar a máquina de sorteio para gerar números maiores e, em seguida, arredondar para o número inteiro mais próximo. É como se você estivesse pegando um bilhete de loteria de uma caixa e, em seguida, arredondando o número para o bilhete mais próximo. Isso é exatamente o que a função parseInt(Math.random() * 10 + 1) faz: ela ajusta a faixa de números e os arredonda para inteiros, simulando um sorteio de números entre 1 e 10.

//numero aleatorios

let numeroSecreto = parseInt(Math.random() * 10 + 1);
let numeroSecreto = parseInt(Math.random() * 100 + 1);
chute = prompt("Escolha um número entre 1 e 100");
