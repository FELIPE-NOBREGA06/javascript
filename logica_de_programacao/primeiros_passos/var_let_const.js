// Declara uma variável chamada 'nome' usando 'var'
// 'var' permite redeclaração e tem escopo global ou de função
// Atribui o valor "felipe" à variável
var nome = "felipe";

// Exibe no console o valor atual da variável 'nome'
console.log(nome);

// Declara uma variável chamada 'idade' usando 'var'
// Atribui o valor numérico 30
var idade = 30;

// Exibe no console o valor da variável 'idade'
console.log(idade);

// Declara novamente a variável 'nome' usando 'var'
// Isso é permitido quando se usa 'var'
// O valor anterior ("felipe") é sobrescrito por "mayra"
var nome = "mayra";

// Exibe no console o novo valor da variável 'nome'
console.log(nome);

// Declara uma variável chamada 'idade_let' usando 'let'
// 'let' NÃO permite redeclaração no mesmo escopo
// Atribui o valor inicial 18
let idade_let = 18;

// Exibe no console o valor atual da variável 'idade_let'
console.log(idade_let);

// Reatribui um novo valor à variável 'idade_let'
// 'let' permite alterar o valor
idade_let = 19;

// Exibe no console o novo valor de 'idade_let'
console.log(idade_let);

// Declara uma constante chamada 'url'
// 'const' não permite reatribuição
const url = "https://www.exemplo.com";

// Exibe no console o valor da constante 'url'
console.log(url);

// Declara uma constante com a URL base da API
const url_base_api = "https://api.exemplo.com/v1";

// Declara uma constante que representa a chave da API
const chave_api = "abcdefghijklmnopq";

// Exibe no console a mensagem informando a URL da API
// Aqui a vírgula separa os valores corretamente
console.log("Conectaneto a api ", url_base_api);

// Exibe no console a mensagem informando a chave da API
console.log("usando a chave de api:", chave_api);

// Declara uma constante representando o número máximo de usuários por sala
// Convenção: constantes usam letras maiúsculas
const MAX_USUARIO_POR_SALA = 10;

// Declara uma constante booleana para indicar modo de depuração
const modo_DEBUG = false;

// Exibe no console o número máximo de usuários permitido
console.log("Máximo de usuarios por sala:", MAX_USUARIO_POR_SALA);

// Exibe no console se o modo de depuração está ativado ou não
console.log("modo de depuração ativada:", modo_DEBUG);
