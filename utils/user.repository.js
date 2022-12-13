pool = require("../utils/db.js");

module.exports = {
  async getOneUser(username) {
    try {
      let conn = await pool.getConnection();
      let sql = "SELECT Login_id, username, useremail, user_role FROM users WHERE username = ? "; 
      // must leave out the password+hash
      const [rows, fields] = await conn.execute(sql, [ username ]);
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
  
  async areValidCredentials(username, password) {
    try {
      let conn = await pool.getConnection();
      let sql = "SELECT * FROM Login WHERE username = ? AND password COLLATE utf8mb4_general_ci  = sha2(concat(user_created, ?), 224) COLLATE utf8mb4_general_ci "; 
      // TODO: better salt+pw hash - COLLATE usually not needed
      const [rows, fields] = await conn.execute(sql, [username, password]);
      conn.release();

      if (rows.length == 1 && rows[0].username === username) {
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