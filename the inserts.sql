INSERT INTO Place values(1, "Morrinson", "Club", 500, 2);
INSERT INTO Place values(2, "Pontoon", "Club", 300, 4);
INSERT INTO Place values(3, "ELLATOhaz", "Club", 650, 1);
INSERT INTO Place values(4, "Fogas-Instant", "Club", 2100, 10);
INSERT INTO Place values(5, "Otkert Club", "Club", 420, 8);
INSERT INTO Place values(6, "Akvarium Club", "Club", 650, 2);
INSERT INTO Place values(7, "Doboa", "Club", 1000, 5);
INSERT INTO Place values(8, "Budapest Park", "Club", 300, 3);
INSERT INTO Place values(9, "Lock", "Club", 1100, 7);
INSERT INTO Place values(10, "BRKLN", "Club", 1120);
INSERT INTO Place values(11, "Bowling ultra", "Bowling", 80, 3);
INSERT INTO Place values(12, "Retro Museum", "Museum", 40, 9);
INSERT INTO Place values(13, "Museum of illusions", "Museum", 50, 10);
INSERT INTO Place values(14, "Laser quest", "Lase game", 60, 4);
INSERT INTO Place values(15, "Pub crawl Bar", "Bar", 80, 1);
INSERT INTO Place values(16, "House of terror", "Horror house", 20, 5);
INSERT INTO Place values(17, "Parliament", "Building", 25, 6);
INSERT INTO Place values(18, "FunIce", "Ice skating", 200, 3);
INSERT INTO Place values(19, "Wine & cheese", "Bar", 35, 8);
INSERT INTO Place values(20, "Danube Boat", "Boat", 700, 9);

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

INSERT INTO Adress values(1, 33, "raday utca", "Budapest", 1092, "Hungary");
INSERT INTO Adress values(2, 22, "Andrassy utca", "Budapest", 1061, "Hungary");
INSERT INTO Adress values(3, 9, "Hajos utca", "Budapest", 1061, "Hungary");
INSERT INTO Adress values(4, 52, "Josef kert", "Budapest", 1088, "Hungary");
INSERT INTO Adress values(5, 120, "kalvin kert", "Budapest", 1092, "Hungary");
INSERT INTO Adress values(6, 6, " Czuczor", "Budapest", 1093, "Hungary");
INSERT INTO Adress values(7, 8, "fovam ter", "Budapest", 1093, "Hungary");
INSERT INTO Adress values(8, 31, "raday utca", "Budapest", 1092, "Hungary");
INSERT INTO Adress values(9, 32, "raday utca", "Budapest", 1092, "Hungary");
INSERT INTO Adress values(10, 33, "raday utca", "Budapest", 1092, "Hungary");

INSERT INTO Event_schedule values(1, "Erasmus monday", "Gazsi", "2022-11-14 18:00:00", "2022-11-15 06:00:00", 1500, 1);
INSERT INTO Event_schedule values(2, "Visit of the retro museum", "Ervin", "2022-11-15 15:00:00", "2022-11-15 17:30:00", 1200, 12);
INSERT INTO Event_schedule values(3, "Bowling night", "Farkas", "2022-11-15 20:00:00", "2022-11-16 01:00:00", 3000, 11);
INSERT INTO Event_schedule values(4, "Boat party", "Ferenc", "2022-11-16 20:30:00", "2022-11-17 04:00:00", 7300, 20);
INSERT INTO Event_schedule values(5, "One dance", "Beriszl", "2022-11-17 18:00:00", "2022-11-18 06:00:00", 0, 7);
INSERT INTO Event_schedule values(6, "Ice skating", "Gazsi", "2022-11-18 14:00:00", "2022-11-18 19:00:00", 2300, 18);
INSERT INTO Event_schedule values(7, "Nation night italy", "Csenger", "2022-11-18 20:00:00", "2022-11-19 06:00:00", 1500, 8);
INSERT INTO Event_schedule values(8, "Ice skating", "Zajzon", "2022-11-19 13:00:00", "2022-11-19 18:00:00", 2300, 18);
INSERT INTO Event_schedule values(9, "Ruin bar & karaoke", "Ervin", "2022-11-19 18:00:00", "2022-11-20 04:00:00", 0, 15);
INSERT INTO Event_schedule values(10, "House of terror tour", "Zamor", "2022-11-20 12:00:00", "2022-11-20 14:30:00", 1200, 16);



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
INSERT INTO Is_drunk values( 1, 2);
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

