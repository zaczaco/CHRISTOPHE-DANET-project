CREATE DATABASE if not exists EBB;
USE EBB;

DROP TABLE if exists Is_played;
DROP TABLE if exists Is_drunk;
DROP TABLE if exists Event_schedule;
DROP TABLE if exists Place;
DROP TABLE if exists Music;
DROP TABLE if exists Drinks;
DROP TABLE if exists Login;

CREATE TABLE Music(
   Id_Music INT,
   Music_Style VARCHAR(50),
   Djs VARCHAR(50),
   PRIMARY KEY(Id_Music)
);

CREATE TABLE Drinks(
   Id_Drinks INT,
   Name_drink VARCHAR(50),
   Volume DECIMAL(15,2),
   Ingredients VARCHAR(50),
   Alcohol BOOLEAN,
   Price DECIMAL(15,2),
   PRIMARY KEY(Id_Drinks)
);

CREATE TABLE Place(
   Id_Place INT,
   Name_place VARCHAR(50),
   Type_place VARCHAR(50),
   Capacity INT,
   City_place varchar(100),
   country_place varchar(100),
   PRIMARY KEY(Id_Place)
);

CREATE TABLE Login(
	 Login_id INT,
    user_name VARCHAR(50),
    pass_word VARCHAR(50)
);

CREATE TABLE Event_schedule(
   Id_Event_schedule INT,
   Name_event VARCHAR(50),
   Superviser VARCHAR(50),
   Start_time DATETIME,
   End_time DATETIME,
   Price DECIMAL(15,2),
   Id_Place INT NOT NULL,
   PRIMARY KEY(Id_Event_schedule),
   FOREIGN KEY(Id_Place) REFERENCES Place(Id_Place)
);

CREATE TABLE Is_played(
   Id_Event_schedule INT,
   Id_Music INT,
   PRIMARY KEY(Id_Event_schedule, Id_Music),
   FOREIGN KEY(Id_Event_schedule) REFERENCES Event_schedule(Id_Event_schedule),
   FOREIGN KEY(Id_Music) REFERENCES Music(Id_Music)
);

CREATE TABLE Is_drunk(
   Id_Event_schedule INT,
   Id_Drinks INT,
   PRIMARY KEY(Id_Event_schedule, Id_Drinks),
   FOREIGN KEY(Id_Event_schedule) REFERENCES Event_schedule(Id_Event_schedule),
   FOREIGN KEY(Id_Drinks) REFERENCES Drinks(Id_Drinks)
);

