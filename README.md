# nodejs-jwt-token-authentication-api

This Api provide jwt token authentication and used to generate jwt token for user.

## Installation

Run this command to install required dependency.

```bash
npm install 
```
Create a .env file in root directory and add following constant
 1. Add mongodb connection url  MONGODB_URL under .env file.
 2. Create a random string for API_KEY and add it to .env
 3. Create random string for JWT_KEY and add it to .env file

Run this command to start server
```bash
npm start
```

## Features
 1. User Registration.
 2. User Login.
 3. Delete User Using Jwt Token.
 4. Fetch List Of User.
 5. Fetch User using Jwt Token
