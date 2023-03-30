const cifrao = '\u0024';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(tique);
console.log(hiragana);

const cidade = "belo horizonte";
const input = "Belo HORIZONTE";

console.log("\n");
console.log(cidade === input);

const inputMinusculo = input.toLowerCase();

console.log("\n");

console.log(cidade === inputMinusculo);

console.log("\n");

const senha = "Jujusvieira";

console.log(senha.length);

console.log("\n");

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(soma);
console.log(multiplicacao);
console.log(operacao);

console.log("\n");

console.log("deu erro");
console.error(new Error("deu erro"));