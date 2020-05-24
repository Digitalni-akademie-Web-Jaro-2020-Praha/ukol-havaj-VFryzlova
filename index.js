"use strict";

let osoba1 = {
	jmeno: 'Alena',
	uspory: 23000
};
let osoba2 = {
	jmeno: 'Karolína',
	uspory: 68000
};

let suma = osoba1.uspory + osoba2.uspory;
let kontoAlena = osoba1.uspory;
let kontoKarolina = osoba2.uspory;
let Alenazbyva = 50000 - kontoAlena;
let KarolinaZbyva = 50000 - kontoKarolina;

const muzouJet = (suma) =>{
  if(suma >= 100000){
    console.log("Holky můžou na dovolenou")
  }else{
    console.log("Holky nemůžou jet na dovolenou, nemají dohromady 100 tisíc. Aleně chybí " + Alenazbyva + ", Karolíně zbývá " + KarolinaZbyva)
  }
};

const zbyvaAlena = (kontoAlena) =>{
  if(kontoAlena < 50000){
    let Alenazbyva = 50000 - kontoAlena;
    console.log("Alena nemá naspořenou svou polovinu a chybí jí ještě " + Alenazbyva)
  }else{
    console.log("Alena má naspořenou svou polovinu")
  }
};

const zbyvaKarolina = (kontoKarolina) =>{
  if(kontoKarolina < 50000){
    let KarolinaZbyva = 50000 - kontoKarolina;
    console.log("Karolína nemá naspořenou svou polovinu a chybí jí ještě " + KarolinaZbyva)
  }else{
    console.log("Karolína má naspořenou svou polovinu")
  }
};
