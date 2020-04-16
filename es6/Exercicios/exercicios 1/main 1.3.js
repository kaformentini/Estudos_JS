// 3.1
const arr = [1, 2, 3, 4, 5];
const teste1 = arr.map(function(item) {
  return item + 10;
});

const arr1 = arr.map(item => item + 10);

console.log(arr);
console.log(teste1);
console.log(arr1);

// 3.2
// Dica: Utilize uma constante pra function
const user = { nome: "Diego", idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}

const mostraidade2 = ({ idade }) => idade;
// const mostraidade2 = (usuario) => usuario.idade;
// const mostraidade2 = usuario => usuario.idade;
// const mostraidade2 = ({ idade }) => {
//     return idade
// };

console.log(user);
console.log(mostraIdade(user));
console.log(mostraidade2(user));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = "Diego", idade = 18) {
  return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mUsurario = (nome, idade) => {
  return { nome, idade };
};

console.log(mUsurario("Kah", 20));

// 3.4
const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  });
};

const nPromise = () => {
  return new Promise((resolve, reject) => {
    return resolve();
  });
};
