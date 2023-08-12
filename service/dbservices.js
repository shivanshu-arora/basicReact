var  config = require('./../dbconfig.js');
const  sql = require('mysql');
  
// Without creating a new promise, the function pointer returned to controller before returning the data from db. before returning the promise, we were getting no result in controller.
function getPosts() {
  return new Promise(function(resolve, reject) {
    const conn = sql.createConnection(config);
    conn.query("Select * from feed", function (err, data) {
      console.log("data: ", data[0]);
      resolve(data);
    });
  })
}

  module.exports = {
    getPosts:  getPosts
  }
