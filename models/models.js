'use strict';
const mongoose = require('./index'); // importing mongoose fro index file
const pokemonJSON = require('../db.json');

const Schema = mongoose.Schema;

const nameSchema = new Schema({
  url: String,
  name: String,
  id: Number,
  sprite: String,
});

const InputPokemon = mongoose.model('Pokemon', nameSchema) //Pokemon is name of the model

function oneIntoDb(url, name, id, sprite) {
  
  return new Promise((resolve, reject) => {
    InputPokemon.create({
      url: url,
      name: name,
      id: id,
      sprite: sprite
    }, function (err) {
      if (err) reject(err);
      else resolve(name);
    })
    
  })
  
}


function intoDb() {
  for (let pokemon of pokemonJSON.pokemons) {
    let url = pokemon.url;
    let name = pokemon.name;
    let id = pokemon.id;
    let sprite = pokemon.sprite;
    console.log('hello')
    InputPokemon.create({
      url: url,
      name: name,
      id: id,
      sprite: sprite
    }, function (err) {
      if (err) console.log(pokemon.name, err);
      else console.log(pokemon.name)
    })
  }
}

module.exports = { InputPokemon, intoDb, oneIntoDb };

// async function foo(){ 
//   let x = new Promise((resolve,reject) => {
//     resolve(7);
//   });
//   let a= await x;
//   console.log(await x);
// }

// function sleep(time) {  
//   let x = new Promise((resolve,reject) => {
//     setTimeout(function(){
//       console.log('hello')
//       resolve()
//     },time)
//   })
//   return x
// }
// async function foo() {
// console.log('1');
// await sleep(2000)
// console.log('2');
// }
// foo()
// 'use strict';

// const db = require('../db');

// exports.getAll = () => db;