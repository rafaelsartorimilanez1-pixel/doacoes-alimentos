import { Connection } from 'mysql2';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cashback7*',
    database: 'iasolidariasite'
})


/* Teste de conexão.
try {
  const [results] = await connection.query(
    'SELECT * FROM doacoes'
  );
  console.log(results);
} catch (err) {
  console.log(err);
}
 */

export default connection;