const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al obtener conexión del pool: ', err);
    return;
  }

  console.log('Conexión obtenida del pool con el ID ' + connection.threadId);

  
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    console.log('Resultados: ', results);
    connection.release();  
  });
});

