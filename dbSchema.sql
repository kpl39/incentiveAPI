--connect to aws db
--psql \
   --host=aa1ewvskqhxmwet.ca9tur9epv1u.us-east-2.rds.amazonaws.com\
   --port=5432 \
   --username kylelinhardt \
   --password \
   --dbname=ebdb

--upload schema to aws 
--psql -f dbSchema.sql --host=aa1ewvskqhxmwet.ca9tur9epv1u.us-east-2.rds.amazonaws.com --username=kylelinhardt --password --dbname=ebdb



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


