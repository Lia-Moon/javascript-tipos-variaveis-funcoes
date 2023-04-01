const nome = "Leo";
const idade = 16;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// diz: "por favor, quero beber"

console.log(`${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`);
console.log(nome + ' diz: "por favor, quero beber ' + (idade >= 18 ? bebidaMaior : bebidaMenor) + '"');
// comparação ? true : false