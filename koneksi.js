var mysql = require("mysql");

//buat koneksi
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "restapidb",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
