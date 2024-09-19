let bebida = 'leite';
let valor;

switch (bebida) {
    case 'café':
        valor = "3,50";
        break;
    case 'leite':
        valor = "2,50";
        break;
    case 'chá':
        valor = "2,00";
        break;
    default:
        console.log("Opção inválida! Por favor, escolha entre café, leite ou chá.");
        break;
}

if (valor !== undefined) {
    console.log("Você escolheu "+bebida+". O valor a ser pago é R$ "+valor+".");
}

var carro = [{modelo: 'audi A3', marca: 'audi', ano: 2013},
{modelo: 'compas', marca: 'jeep', ano: 2014}];

for (let index in carro) {
    console.log(carro[index]);
    
}

for (let c of carro) {
    console.log(c.ano);
    
}

var c =1;
while (c<= 10) {
    console.log(c); 
    c++;   
}
var t =1;
do {
    console.log(t);
    t++
} while (t<2);


const ccarro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in ccarro) {
  
    console.log(caracteristica + ': ' + ccarro[caracteristica]);
  
  }
  console.log('-----1');
  console.log('-----2');
  console.log('-----3');

  const ca = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
  
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
  
  ];
  
  for (let indice in ca) {
  
    console.log('Carro ' + (parseInt(indice) + 1) + ':');
  
    for (let atributo in ca[indice]) {
  
      console.log(atributo + ': ' + ca[indice][atributo]);
  
    }
  
    console.log('-----');
  
  }


