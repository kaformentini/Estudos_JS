// 4.1
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

// 5.1.1

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

// 5.1.2

function soma(...params) {
  return params.reduce((total, item) => total + item);
}

console.log(soma(1, 2, 3, 4, 5));

// 5.2

const usuario5 = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const user5 = { ...usuario5, nome: "Gabriel" };
const user6 = {
  ...usuario5,
  endereco: { ...usuario5.endereco, cidade: "Lontras" }
};

console.log(user5);
console.log(user6);

// 6

const usuario6 = {
  nome2: "Diego",
  idade2: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const { nome2, idade2 } = usuario6;

console.log(`O usuário ${nome2} possui ${idade2} anos`);

// 7

const nome7 = "Diego";
const idade7 = 23;

const usuario7 = {
  nome7,
  idade7,
  cidade7: "Rio do Sul"
};

console.log(usuario7);
