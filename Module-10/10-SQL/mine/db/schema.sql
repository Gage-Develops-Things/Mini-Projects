\c grocery_db
DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

\c movie_db;

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(100)
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    review_star_rating INT,
    review_content TEXT,
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movies (movie_id) ON DELETE SET NULL
);