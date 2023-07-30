const  config = {
    user:  'root', // sql user
    password:  'shivangi', //sql user password
    server: 'localhost', // if it does not work try- localhost
    database:  'posts',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      encrypt: false,
      keepAlive: true
    },
    port: 8080
  }
  
  module.exports = config;
  