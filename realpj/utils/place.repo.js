pool = require("../utils/db.js");

module.exports = {

    async Get_name_and_id_place(){

        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Id_place, Name_place FROM Place";
            const [rows, fields] = await conn.execute(sql,);
            conn.release();
            return rows;
        }
        catch (err) { 
            console.log(err);
            throw err; 
        }
    

    }
}