"use strict";

let osoba1 = {
	jmeno: 'Alena',
	uspory: 53000
};
let osoba2 = {
	jmeno: 'Karolína',
	uspory: 68000
};

let suma = osoba1.uspory + osoba2.uspory;

const muzouJet = (suma) =>{
  if(suma >= 100000){
  console.log("Holky můžou na dovolenou")
}
};

let kontoAlena = osoba1.uspory;
const zbyvaAlena = (kontoAlena) =>{
  if(kontoAlena < 50000){
  let zbyva = 50000 - kontoAlena;
  console.log("Alena nemá naspořenou svou polovinu a chybí jí ještě " + zbyva)
}else{
  console.log("Alena má naspořenou svou polovinu")
}
};

let kontoKarolina = osoba2.uspory;
const zbyvaKarolina = (kontoKarolina) =>{
  if(kontoKarolina < 50000){
  let zbyva = 50000 - kontoKarolina;
  console.log("Karolína nemá naspořenou svou polovinu a chybí jí ještě " + zbyva)
}else{
  console.log("Karolína má naspořenou svou polovinu")
}
};
