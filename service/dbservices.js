const { json } = require('body-parser');
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

function createPost(req) {
  return new Promise(function(resolve, reject) {
    const conn = sql.createConnection(config);
    const sqlQuery = "Insert into feed(title, category, text) values ('"+req.title+"','"+ req.category+"','"+req.text+"')";
    console.log("sqlQuery: ", sqlQuery);
    conn.query(sqlQuery, function (err, data) {
      console.log("posted data to table");
      const res = {
        "message": "Data posted successfully to table"
      }
      resolve(res);
    });
  })
}

  module.exports = {
    getPosts:  getPosts,
    createPost: createPost
  }
