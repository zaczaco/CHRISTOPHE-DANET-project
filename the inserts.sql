
INSERT INTO Place values(1, "Morrinson", "Club", 500, "budapest","Hongrie"),
(2, "Pontoon", "Club", 300,"budapest","Hongrie"),
(3, "ELLATOhaz", "Club", 650, "budapest","Hongrie"),
(4, "Fogas-Instant", "Club", 2100, "budapest","Hongrie"),
(5, "Otkert Club", "Club", 420, "budapest","Hongrie"),
(6, "Akvarium Club", "Club", 650, "budapest","Hongrie"),
(7, "Doboa", "Club", 1000, "budapest","Hongrie"),
(8, "Budapest Park", "Club", 300, "budapest","Hongrie"),
(9, "Lock", "Club", 1100, "budapest","Hongrie"),
(10, "BRKLN", "Club", 1120, "budapest","Hongrie");

INSERT INTO Drinks values(1, "Vodka soda", 30, "vodka soda", "TRUE", 2200),
(2, "Vodka redbull", 25.25, "Vodka redbull", "TRUE", 2600),
(3, "Aperol spritz", 35.50, "Spritz,prosseco,perrier", "TRUE",4200),
(4, "Gin tonik", 25.25, "Gin, indian tonic", "TRUE", 2950),
(5, "white wine bottle", 75, "white wine", "TRUE", 8000),
(6, "red wine bottle", 75, "red Wine", "TRUE", 8500),
(7, "Beer", 50, "Beer", "TRUE", 800),
(8, "Martini dry", 75, "wine", "TRUE", 8000),
(9, "whisky", 5, "whisky", "TRUE", 2950),
(10, "soda", 33 , "coca", "TRUE", 890);

INSERT INTO Music values(1, "House techno", "DJ Albane");
INSERT INTO Music values(2, "Hardcore techno", "DJ Zac");
INSERT INTO Music values(3, "Latino", "DJ Vico");
INSERT INTO Music values(4, "Reggaeton", "DJ Lucas");
INSERT INTO Music values(5, "Pop","DJ Kus");
INSERT INTO Music values(6, "K-pop", "DJ Kaci");
INSERT INTO Music values(7, "Techno", "DJ Mitch");
INSERT INTO Music values(8, "Country music", "Dj Turner");
INSERT INTO Music values(9, "Heavy metal", "DJ Moustache");
INSERT INTO Music values(10, "Trance", "DJ Alexos");


INSERT INTO Event_schedule values(1, "Erasmus monday", "Gazsi", "2022-11-14 18:00:00", "2022-11-15 06:00:00", 1500, 1);
INSERT INTO Event_schedule values(2, "Visit of the retro museum", "Ervin", "2022-11-15 15:00:00", "2022-11-15 17:30:00", 1200, 3);
INSERT INTO Event_schedule values(3, "Bowling night", "Farkas", "2022-11-15 20:00:00", "2022-11-16 01:00:00", 3000, 4);
INSERT INTO Event_schedule values(4, "Boat party", "Ferenc", "2022-11-16 20:30:00", "2022-11-17 04:00:00", 7300, 5);
INSERT INTO Event_schedule values(5, "One dance", "Beriszl", "2022-11-17 18:00:00", "2022-11-18 06:00:00", 0, 2);
INSERT INTO Event_schedule values(6, "Ice skating", "Gazsi", "2022-11-18 14:00:00", "2022-11-18 19:00:00", 2300, 8);
INSERT INTO Event_schedule values(7, "Nation night italy", "Csenger", "2022-11-18 20:00:00", "2022-11-19 06:00:00", 1500, 9);
INSERT INTO Event_schedule values(8, "Ice skating", "Zajzon", "2022-11-19 13:00:00", "2022-11-19 18:00:00", 2300, 10);
INSERT INTO Event_schedule values(9, "Ruin bar & karaoke", "Ervin", "2022-11-19 18:00:00", "2022-11-20 04:00:00", 0, 6);
INSERT INTO Event_schedule values(10, "House of terror tour", "Zamor", "2022-11-20 12:00:00", "2022-11-20 14:30:00", 1200, 7);



INSERT INTO Is_played values( 1, 8);
INSERT INTO Is_played values( 1, 2);
INSERT INTO Is_played values( 1, 7);

INSERT INTO Is_played values( 3, 5);
INSERT INTO Is_played values( 3, 10);

INSERT INTO Is_played values( 4, 5);
INSERT INTO Is_played values( 4, 9);
INSERT INTO Is_played values( 4, 3);

INSERT INTO Is_played values( 5, 1);
INSERT INTO Is_played values( 5, 6);

INSERT INTO Is_played values( 6, 3);

INSERT INTO Is_played values( 7, 5);
INSERT INTO Is_played values( 7, 10);
INSERT INTO Is_played values( 7, 2);

INSERT INTO Is_played values( 8, 3);

INSERT INTO Is_played values( 9, 2);
INSERT INTO Is_played values( 9, 4);
INSERT INTO Is_played values( 9, 8);

INSERT INTO Is_drunk values( 1, 8);
INSERT INTO Is_drunk values( 1, 2);
INSERT INTO Is_drunk values( 1, 7);
INSERT INTO Is_drunk values( 1, 3);
INSERT INTO Is_drunk values( 1, 1);

INSERT INTO Is_drunk values( 3, 5);
INSERT INTO Is_drunk values( 3, 10);
INSERT INTO Is_drunk values( 3, 1);
INSERT INTO Is_drunk values( 3, 2);
INSERT INTO Is_drunk values( 3, 9);

INSERT INTO Is_drunk values( 4, 5);
INSERT INTO Is_drunk values( 4, 9);
INSERT INTO Is_drunk values( 4, 3);

INSERT INTO Is_drunk values( 5, 1);
INSERT INTO Is_drunk values( 5, 6);
INSERT INTO Is_drunk values( 5, 10);
INSERT INTO Is_drunk values( 5, 9);
INSERT INTO Is_drunk values( 5, 2);

INSERT INTO Is_drunk values( 7, 5);
INSERT INTO Is_drunk values( 7, 10);
INSERT INTO Is_drunk values( 7, 3);
INSERT INTO Is_drunk values( 7, 2);
INSERT INTO Is_drunk values( 7, 1);

INSERT INTO Is_drunk values( 9, 2);
INSERT INTO Is_drunk values( 9, 4);
INSERT INTO Is_drunk values( 9, 8);

INSERT INTO Login values(1,"AdminAlex","MdpAdmin1EBB"),
(2,"Admin_Alban","MdpAdmin2EBB"),
(3,"GuestAdmin","MdpAdmin2");

