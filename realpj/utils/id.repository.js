pool = require("../utils/db.js");

module.exports = {

    async createclient(username, user_email, user_password){

        try {
            let conn = await pool.getConnection();
            let sql = "INSERT into Login  VALUES (NULL, ?, ?, 'CLIENT', ?)";
            const [rows, fields] = await conn.execute(sql,[username, user_password, user_email]);
            conn.release();
            return rows;
        }
        catch (err) { 
            console.log(err);
            throw err; 
        }
    

    }
}



