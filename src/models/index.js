const mysql = require('mysql2/promise');



module.exports = {
  getConnection: async () => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'galante',
      database: 'quests',
      namedPlaceholders: true,
    });
    return await connection;
  }
};