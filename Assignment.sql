
CREATE TABLE todo_list (id INTEGER PRIMARY KEY, item TEXT, minutes INTEGER);
INSERT INTO todo_list VALUES (1, "Excercise", 30);
INSERT INTO todo_list VALUES (2, "Learn some new stuffs", 60);
INSERT INTO todo_list VALUES (3, "Make some homework", 40);
INSERT INTO todo_list VALUES (4, "Play some games", 60);

SELECT SUM(minutes) FROM todo_list;
