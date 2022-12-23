# api of users

## create user

create user api = http://localhost:5000/user/createuser

type = POST

body = {
"First_Name":"firstname",
"Last_Name":"lastname",
"Email":"email@email.com",
"Password":"password"
}

## view all users

view all users api = http://localhost:5000/user
type = GET
token required in headers
Authorization : Token
![example Token img ]('imgs/Screenshot 2022-12-17 185615.png')

## view one user by id

view one user api = http://localhost:5000/user/{idofuser}
type = GET
token required in headers
Authorization : Token
![example Token img ]('imgs/Screenshot 2022-12-17 185615.png')

## delete one user

view one user api = http://localhost:5000/user/delete/{idofuser}
type = GET
token required in headers
Authorization : Token
![example Token img ]('imgs/Screenshot 2022-12-17 185615.png')

# api of Products

## create product

create user api = http://localhost:5000/products/createproduct

type = POST

body = {
"name":"apple watch",
"price":1500
}

## view all products

view all users api = http://localhost:5000/products
type = GET
token required in headers
Authorization : Token
![example Token img ]('imgs/Screenshot 2022-12-17 185615.png')

## view one product by id

view one user api = http://localhost:5000/products/{idofuser}
type = GET
token required in headers
Authorization : Token
![example Token img ]('imgs/Screenshot 2022-12-17 185615.png')

# api of order

## create order

create user api = http://localhost:5000/order

type = POST
token required in headers

body = {
"produc_id": [
1,
3,
4,
2,
3
],
"count": "54",
"user_id": "1",
"on_active": true
}

# login api

login api = http://localhost:5000/order

body = {
"Email":"mohamed55@mohm.com",
"Password":"123mohamed"
}
results = {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTI5Njc2MX0.gqo6oD4NgMdhGTgIEbKQtGkLvDfQU8vR1fhSfBupc2U"
}

## view tables name

    Name     | Type

-------------+--------
orderproduct| table
orders | table
product | table
users | table

## users table

Column | Type |
id | integer |
first_name | character varying(50) |
last_name | character varying(50) |
email | character varying(50) |
password | character varying(255) |

## products table

Column | Type |
id | integer |
name | character varying(100) |
price | integer |

## orders

Column | Type |
id | integer |  
 count | integer |
user_id | integer |
on_active | boolean |

## orderproduct

Column | Type |
id | integer |
order_id | integer |
product_id | integer |
