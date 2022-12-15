pool = require("../utils/db.js");

module.exports = {
  async getOneUser(user_email) {
    try {
      let conn = await pool.getConnection();
      let sql = "SELECT * FROM Login WHERE user_email = ? "; 
      // must leave out the password+hash
      const [rows, fields] = await conn.execute(sql, [ user_email ]);
      conn.release();

      if (rows.length == 1) {
        return rows[0];
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  
  async areValidCredentials(user_email, password) {
    try {
      let conn = await pool.getConnection();
      let sql = "SELECT * FROM Login WHERE user_email = ? AND password = ?";
      const [rows, fields] = await conn.execute(sql, [user_email, password]);
      conn.release();

      if (rows.length == 1) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}; 