const user = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = user.map(function(item) {
  return item.idade;
});

console.log(idades);

const employers = user.filter(function(item) {
  return item.idade > 18 && item.empresa === "Rocketseat";
});

console.log(employers);

const company = user.find(function(item) {
  return item.empresa === "Google;";
});

console.log(company);

const oldEmployers = user
  .map(function(item) {
    return {
        ...item,
        idade: item.idade * 2,
    };
  })
  .filter(function(item) {  
    return item.idade < 51;
  });

console.log(oldEmployers);

console.log(user);
