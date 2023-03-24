const mysql = require('./index');
const bcrypt = require('bcrypt');
class User {
  constructor({ id, first_name, last_name, user, password, is_admin, status }) {
    this.table = 'users';
    this.id = id || 0;
    this.first_name = first_name;
    this.last_name = last_name;
    this.user = user;
    this.password = password;
    this.is_admin = is_admin ? 1 : 0;
    this.status = status || 1;
  }

  async index() {
    const conn = await mysql.getConnection();
    const [rows] = await conn.execute('SELECT * FROM users');
    return rows;
  }
  async store() {
    try {
      const conn = await mysql.getConnection();
      const user = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        user: this.user,
        is_admin: this.is_admin,
        status: this.status,
        password: bcrypt.hashSync(this.password, 10)
      };
      // const result = await conn.execute('INSERT INTO users SET ?',
      //   user);
      const result = await conn.execute(`INSERT INTO ${this.table} (first_name, last_name, user, password, is_admin, status) VALUES ( '${user.first_name}', '${user.last_name}', '${user.user}', '${user.password}', '${user.is_admin}', '${user.status}')`);
      if (result[0].affectedRows === 0) {
        return { error: 'Error al crear el usuario' };
      }

      return { message: 'Usuario creado correctamente' };
    } catch (error) {
      return { error: 'Error al crear el usuario' };
    }
  }

  async validateLogin() {
    const conn = await mysql.getConnection();
    const [rows] = await conn.execute(`SELECT * FROM ${this.table} WHERE user = '${this.user}'`);
    if (rows.length === 0) {
      return { error: 'Usuario o contraseña incorrectos' };
    }
    const user = rows[0];
    if (!bcrypt.compareSync(this.password, user.password)) {
      return { error: 'Usuario o contraseña incorrectos' };
    }
    return user;
  }

}


module.exports = User;