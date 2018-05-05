DROP DATABASE IF EXISTS gallery;
CREATE DATABASE gallery;

GRANT ALL PRIVILEGES ON DATABASE gallery TO postgres;

\connect gallery;

CREATE TABLE lists
(
  place_id INT NOT NULL,
  name TEXT NOT NULL,
  photos TEXT[10] NOT NULL,
  CONSTRAINT place_pk PRIMARY KEY (place_id)
);