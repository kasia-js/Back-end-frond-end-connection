'use strict';

const models = require('../models/models');

const getData = async function (ctx) {
  try {

    ctx.body = await models.InputPokemon.find();// find returns them all 
  
  } catch (o_O) {
    ctx.body = o_O;
    ctx.status = 500; 
  }
};
const putIntoServer = async (ctx) => {
  try {
    await models.intoDb();
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500
    console.log(e)
  }
}
const postPokemnon = async (ctx) => {
  try {
    console.log(ctx.request.body)
    const name = ctx.request.body.name;
    const url= ctx.request.body.url;
    const id = ctx.request.body.id;
    const sprite = ctx.request.body.sprite;
    await models.oneIntoDb(url, name, id, sprite);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500
    console.log(e)
  }
}

module.exports = {
  getData, 
  putIntoServer,
  postPokemnon 
};

// 'use strict';

// const models = require('../models/models');

// const getData = async function (ctx) {
//   try {

//      ctx.body = await models.getAll(); 
  
//   } catch (o_O) {
//     ctx.body = o_O;
//     ctx.status = 500; 
//   }
// };

// module.exports = {getData};