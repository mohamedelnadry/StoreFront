## setup app

---npm install

--- add connection database details in .env file

--- npm run dev <!-- to run the application -->

<!-- test app -->

--- npm run test <!-- test the application -->

# connect to database

setup in .env file

PORT=\***\*\*\*\*\*\*** default port backend = 5000 <!-- port that backend running on -->
DB_HOST=\***\*\*\*\*\*\***
POSTGRES_USER=\***\*\*\*\*\*\***
POSTGRES_PASSWORD=\***\*\*\*\*\*\***
POSTGRES_DB=\***\*\*\*\*\*\***
POSTGRES_DBPort=\***\*\*\*\*\*\*** defualt port database '5432' <!-- port that database running on -->

<!-- test database -->

POSTGRES_DB_TEST=\***\*\*\*\*\*\*** <!-- you need only to write test of your database name -->

ENV = 'test' or 'dev' <!-- default dev -->

# test jasmine

npm run test
Default port is 5432.

# JWT SecertKey

JWT_SECRET_KEY = "LeageOfLegand"

# bcrypt config

SALT=10

PEPPER=mohamdramdan

# package installation

- bcrypt
- dotenv
- express
- jsonwebtoken
- pg
