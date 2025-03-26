const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',        
  user: 'root',             
  password: '',             
  database: 'testdb'        
});


connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa con el ID ' + connection.threadId);

  
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    console.log('Resultados: ', results);
  });
});
