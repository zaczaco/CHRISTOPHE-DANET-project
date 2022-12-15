pool = require("../utils/db.js");
module.exports = {
    getBlankEvent_schedule(){ 
        return {
            "Id_Event_schedule": 0,
            "Superviser": "XXXXX",
            "Name_Event": "XXXX",
            "Start_time": 0,
            "End_time": 0,
            "Price": 0
        };
    },
    async getAllPlace(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM Place";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) { 
            console.log(err);
            throw err; 
        }
    },
    async getAllDrinks(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM Drinks";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async getAllEvent_schedule(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT E.Id_Event_schedule, Name_event, Start_time, Name_place FROM Event_schedule E INNER JOIN Place P ON P.Id_Place = E.Id_Place ";
            const [rows, fields] = await conn.execute(sql,);
            conn.release();
            console.log("EBB FETCHED: "+rows.length);
            console.log(rows);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getOneEvent(Event_scheduleId){ 
        try {
            let conn = await pool.getConnection();
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
            const [okPacket, fields] = await conn.execute(sql, [ Event_scheduleId ]);  
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async createOneEvent_schedule(Name_event, Superviser, Start_time, End_time, Price, Id_place){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Event_schedule VALUES (NULL, ?, ?, ?, ?, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [Name_event, Superviser, Start_time, End_time, Price, Id_place]); 
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async addOneDrinks(Id_Drinks){ 
        try {202
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Drinks VALUES (NULL, ?, ?, ?, ?, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [Name_drink, Volume, Ingredients, Alcohol, Price, 'Drink']); 
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async AddOneSong(Id_Drinks){ 
        try {202
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Music VALUES (NULL, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [Style, Djs, 'Music']); 
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
            let sql = "UPDATE Event_schedule SET Name_event=?, Start_time=?, End_time=?, Price=? WHERE Id_Event_schedule=? "; 
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