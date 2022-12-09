// utils/event.repository.js
pool = require("../utils/db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
    
    async getAllplaces(){ // TODO? move to Places.repository.js
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM places";
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
            let sql = "SELECT * FROM Event_schedule INNER JOIN Places ON Event_schedule_places=places_id ";
            const [rows, fields] = await conn.execute(sql,);
            conn.release();
            console.log("Event_schedule FETCHED: "+rows.length);
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
            let sql = "SELECT * FROM Event_schedule INNER JOIN brands ON Event_schedule_places=places_id WHERE Event_schedule_id = ?";
            const [rows, fields] = await conn.execute(sql, [ carId ]);
            conn.release();
            console.log("EVENT_SCHEDULE FETCHED: "+rows.length);
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
            let sql = "DELETE FROM Event_schedule WHERE Event_schedule_id = ?";
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

    async addOneEvent_schedule(PlacesId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Event_schedule (Event_schedule_id, Event_schedule_Places) VALUES (NULL, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [ PlacesId ]); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },







}