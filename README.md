# nodejs-jwt-token-authentication-api

This repository provides jwt token authentication and provides various  APIs like User Registration,Login etc.

## Installation

Run this command to install the required dependency.

``` bash
npm install 
```
Create a `.env` file in root directory and add following constant
 1. Create an environment variable `MONGODB_URL` and add mongodb connection url
 2. Create an environment variable `API_KEY` and add random string
 3. Create an environment variable `JWT_KEY` and add random string,this variable will be used to sign the JWT Token

Run this command to start the server
```bash
npm start
```

## Api
 [User Registration](#User-Registration-API)<br>
 [User Login](#User-Login-API)<br>
 [Fetch User using Jwt Token](#Fetch-User-using-Jwt-Token)<br>
 [Delete User Using Jwt Token](#Delete-User-Using-Jwt-Token)

>To run the above API using PostMan you can download using this [link](https://drive.google.com/file/d/1fE7o4XgAB0Rm8vWLq_D_N07vSxTUXZsm/view?usp=sharing) and Import in Postman 

 ### User Registration API.
 <br>

 This Api creates a user in the MongoDB 

 #### Api Endpoint

 `http://api_domain:3000/api/v1/auth/signup`

 #### Headers
In order to use this endpoint, you need to pass `apiKey` that we have created previously under .env file in the header

`apikey: "api_key"`

#### Sample Request Body

```json
{
"FirstName":"sam",
"LastName":"stan",
"Email":"test@mail7.io",
"Password":"test123",
"Address":"Canada",
"Phone":"918701887142",
"Role":"Admin"
}

```

#### Output

```json
{
    "IsPosted": true,
    "Success": true
}
```

### User Login API
<br>

 This Api return JWT Token After successful Login


 #### Api Endpoint

 `http://api_domain:3000/api/v1/auth/login`

 #### Headers
In order to use this endpoint, you need to pass `apiKey` that we have created previously under .env file in the header

`apikey: "api_key"`

#### Sample Request Body

```json
{
"Email":"test@mail7.io",
"Password":"test123"
}

```

#### Output

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InRlc3RAbWFpbDcuaW8iLCJVc2VySWQiOiI2MjkxY2JmYTQ2OTgyNzMwOTFkOTZiZjQiLCJpYXQiOjE2NTM3MjQzMTcsImV4cCI6MTY1MzcyNzkxN30.pTYhNNB3zDonLw7X5tWLIAKlQ8jFGSSh5iNyqfi4pTA",
    "IsAuthenticated": true
}
```


### Fetch User using Jwt Token
<br>

 This Api will fetch the user profile using JWT Token


 #### Api Endpoint

 `http://api_domain:3000/api/v1/auth/getUserByToken`

 #### Headers
In order to use this endpoint, you need to pass `apiKey` and JWT Token, that we have created previously under .env file in the header

`apikey: "api_key"`
<br>
`Authorization: Bearer jwt_token`


#### Output

```json
{
    "Profile": [
        {
            "IsDeleted": false,
            "Address": "Canada",
            "Phone": 918701887145,
            "FirstName": "sam",
            "LastName": "stan",
            "Role": "Admin",
            "_id": "6291cbfa4698273091d96bf4",
            "Email": "test@mail7.io",
            "CreatedAt": "2022-05-28T07:15:06.391Z"
        }
    ],
    "Success": true
}
```

### Delete User Using Jwt Token
<br>

 This Api deletes the user using JWT Token and user id


 #### Api Endpoint

 `http://api_domain:3000/api/v1/auth/delete`

 #### Headers
In order to use this endpoint, you need to pass `apiKey` that we have created previously under `.env` file in the header

`apikey: "api_key"`

#### Query Param

`user_id=6291cbfa4698273091d96bf4`
Note: the user id will be `_id` in profile response
#### Output

```json
{
    "IsDeleted": true,
    "Success": true
}
```

