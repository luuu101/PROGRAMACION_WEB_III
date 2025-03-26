const mysql = require('mysql2/promise');


async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
  });

  console.log('Conexión exitosa');

  // Ejecutar la consulta
  const [rows, fields] = await connection.execute('SELECT * FROM users');
  console.log('Resultados: ', rows);
  await connection.end();  
}

connect().catch(err => console.error('Error en la conexión: ', err));

