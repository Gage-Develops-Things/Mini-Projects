SELECT movies.movie_name AS movie, reviews.review_content
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.movie_id
ORDER BY movies.movie_name;