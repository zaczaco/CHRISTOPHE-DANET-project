CREATE TABLE Adress(
   Id_Adress INT,
   Number_road INT,
   Road VARCHAR(50),
   Postal_code INT,
   City VARCHAR(50),
   Country VARCHAR(50),
   PRIMARY KEY(Id_Adress)
);

CREATE TABLE Music(
   Id_Music INT,
   Style VARCHAR(50),
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
   Id_Adress INT NOT NULL,
   PRIMARY KEY(Id_Place),
   FOREIGN KEY(Id_Adress) REFERENCES Adress(Id_Adress)
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
