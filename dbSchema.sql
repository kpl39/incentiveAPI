DROP TABLE IF EXISTS users CASCADE;;


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  USERID VARCHAR,
  EMAIL VARCHAR,
  USERNAME VARCHAR,
  PROFILEURL VARCHAR
);

INSERT INTO users (USERID, EMAIL, USERNAME, PROFILEURL)
  VALUES ('fsdjkahfakj', 'snoop@gmail.com', 'snoopdogg', 'https://s3.amazonaws.com/ionic-io-static/j9wO6FgsTLW082yfuhxx_snoop_dogg.jpg');


