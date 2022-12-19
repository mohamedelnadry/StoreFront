# connect to database

setup in .env file

PORT=****\*\*\*****
DB_HOST=****\*\*\*****
POSTGRES_USER=****\*\*\*****
POSTGRES_PASSWORD=****\*\*\*****
POSTGRES_DB=****\*\*\*****
POSTGRES_DBPort=****\*\*\*****

<!-- test database -->

POSTGRES_DB_TEST=****\*\*\*****

NODE_ENV = 'test' or 'dev'

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
