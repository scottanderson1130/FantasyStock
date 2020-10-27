# FantasyStock

- Tech Stack:
  React Redux PostgreSQL Express Node Passport Axios Mocha Travis Husky

## <a name="DB Setup"></a>DB Setup

First, install PostgreSQL 12 on your machine:
https://www.postgresql.org/download/

- Then, use `node -v` to check your current version of Node. Upgrade to 12, if not currently on version 12.

- service postgresql start // start postgresSQL

- psql -U root // log in to postgreSQL with your password

CREATE DATABASE

- stock; // create postgreSQL database

- \c stock; // connect to stock database

- npm run start // starts development server

- npm run test-db // tests database commands and populates w/ sample data

Environment Variables for DB

Place in a .env file in outermost directory

## env_variables:

- DB_USERNAME // PostgreSQL login username

- DB_PASSWORD // PostgreSQL password

- DB_HOST // database host (default=localhost)

- DB_PORT // database port (default=5432)

- DB_DBNAME // database name (default=stock)
