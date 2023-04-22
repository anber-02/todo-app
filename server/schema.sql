CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR (255) UNIQUE NOT NULL,
  password VARCHAR(255)
);
CREATE TABLE todos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE 
);
-- on delete cascade => si el usuario es eliminado, borra todas las 
-- tares del usuario automaticamente
CREATE TABLE shared_todos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  todo_id INT,
  user_id INT,
  shared_with_id INT,
  FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE,
  FOREIGN KEy (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEy (shared_with_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert users
INSERT INTO todo_app.users (name, email, password) VALUES('luis', 'luis@gmail.com', '1234');
INSERT INTO todo_app.users (name, email, password) VALUES('Anberto', 'anber@gmail.com', '12345');

--Add todos user 1
INSERT INTO todo_app.todos(title, user_id)
VALUES
("🏃‍♂️Go for morning run",1),
("📖Read one chapter of book 'THE LAST OF US'",1),
("🎶Listen to a podcast",1),
("🤸‍♀️Go to the GYM",1),
("💻Build a software to visorus",1),
("📝Write a poem",1);

-- Shared todo1 of user 1 with user 2
INSERT INTO shared_todos(todo_id, user_id, shared_with_id)
VALUES(1,1,2);


-- Get todos including shared todo by id
SELECT todos.*, shared_todos.shared_with_id
FROM todos
LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
WHERE todos.user_id = [user_id] OR shared_todos.shared_with_id = [user_id];