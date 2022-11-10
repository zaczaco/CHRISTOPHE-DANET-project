CREATE TABLE Adress(
   Id_Adress COUNTER,
   Number INT,
   Road VARCHAR(50),
   City VARCHAR(50),
   Postal_code INT,
   Country VARCHAR(50),
   PRIMARY KEY(Id_Adress)
);

CREATE TABLE Music(
   Id_Music COUNTER,
   Style VARCHAR(50),
   Djs VARCHAR(50),
   PRIMARY KEY(Id_Music)
);

CREATE TABLE Activity(
   Id_Activity COUNTER,
   Name VARCHAR(50),
   Type VARCHAR(50),
   Capacity INT,
   Id_Adress INT NOT NULL,
   PRIMARY KEY(Id_Activity),
   FOREIGN KEY(Id_Adress) REFERENCES Adress(Id_Adress)
);

CREATE TABLE Drinks(
   Id_Drinks COUNTER,
   Name VARCHAR(50),
   Price INT,
   PRIMARY KEY(Id_Drinks)
);

CREATE TABLE Club(
   Id_Club COUNTER,
   Name VARCHAR(50),
   Capacity INT,
   Id_Adress INT NOT NULL,
   PRIMARY KEY(Id_Club),
   FOREIGN KEY(Id_Adress) REFERENCES Adress(Id_Adress)
);

CREATE TABLE Event(
   Id_Event COUNTER,
   Name VARCHAR(50),
   Time_event DATETIME,
   Price INT,
   Id_Activity INT,
   Id_Club INT,
   PRIMARY KEY(Id_Event),
   FOREIGN KEY(Id_Activity) REFERENCES Activity(Id_Activity),
   FOREIGN KEY(Id_Club) REFERENCES Club(Id_Club)
);

CREATE TABLE Played(
   Id_Music INT,
   Id_Activity INT,
   PRIMARY KEY(Id_Music, Id_Activity),
   FOREIGN KEY(Id_Music) REFERENCES Music(Id_Music),
   FOREIGN KEY(Id_Activity) REFERENCES Activity(Id_Activity)
);

CREATE TABLE Set_(
   Id_Club INT,
   Id_Music INT,
   PRIMARY KEY(Id_Club, Id_Music),
   FOREIGN KEY(Id_Club) REFERENCES Club(Id_Club),
   FOREIGN KEY(Id_Music) REFERENCES Music(Id_Music)
);

CREATE TABLE Drink(
   Id_Club INT,
   Id_Drinks INT,
   PRIMARY KEY(Id_Club, Id_Drinks),
   FOREIGN KEY(Id_Club) REFERENCES Club(Id_Club),
   FOREIGN KEY(Id_Drinks) REFERENCES Drinks(Id_Drinks)
);

CREATE TABLE Drink_(
   Id_Activity INT,
   Id_Drinks INT,
   PRIMARY KEY(Id_Activity, Id_Drinks),
   FOREIGN KEY(Id_Activity) REFERENCES Activity(Id_Activity),
   FOREIGN KEY(Id_Drinks) REFERENCES Drinks(Id_Drinks)
);
