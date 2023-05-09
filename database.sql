CREATE TABLE characters (
  ID INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  history TEXT,
  popularity INT,
  FOREIGN KEY (user_id) REFERENCES users(ID),
  FOREIGN KEY (list_id) REFERENCES lists(ID),
  FOREIGN KEY (category_id) REFERENCES categories(ID)
);
