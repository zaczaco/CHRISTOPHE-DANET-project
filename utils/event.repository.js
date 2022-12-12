// utils/event.repository.js
pool = require("../utils/db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
   
    async getAllPlace(){ // TODO? move to brands.repository.js
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM Place";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) {
            // TODO: log/send error ... 
            console.log(err);
            throw err; // return false ???
        }
    },
    async getAllEvent_schedule(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Id_Event_schedule,Name_event,Start_time,End_time,Price, P.Id_Place,Capacity,Name_place,City_place,country_place FROM Event_schedule E INNER JOIN Place P ON P.Id_Place = E.Id_Place";
            const [rows, fields] = await conn.execute(sql,);
            conn.release();
            console.log("EBB FETCHED: "+rows.length);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getOneEvent_schedule(Event_scheduleId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM Event_schedule WHERE Id_Event_schedule = '?'";
            const [rows, fields] = await conn.execute(sql, [ carId ]);
            conn.release();
            console.log("EBB FETCHED: "+rows.length);
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async delOneEvent_schedule(Event_scheduleId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM Event_schedule WHERE Name_event = ?";
            const [okPacket, fields] = await conn.execute(sql, [ Event_scheduleId ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async createOneEvent_schedule(Id_Event_schedule){ 
        try {202
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Event_schedule VALUES (NULL, ?, ?, ?, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [Name_event, Start_time, End_time, Price, 'EVENT']); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async modifyOneEvent_schedule(Name_event, Start_time, End_time, Price){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE Event_schedule SET Name_event=?, Start_time=?, End_time=?, Price=? WHERE Id_Event_schedule=? "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [Name_event, Start_time, End_time, Price ]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    }






}