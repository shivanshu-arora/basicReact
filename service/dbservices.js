var  config = require('./../dbconfig.js');
const  sql = require('mssql');

async  function  getPosts() {
    try {
      let  pool = await  sql.connect(config);
      let  posts = await  pool.request().query("SELECT * from feed");
      return  posts.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }
  
  module.exports = {
    getPosts:  getPosts
  }
