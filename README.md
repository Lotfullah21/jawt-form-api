npm install jsonwebtoken

## JWT

jwt.sign() takes the payload and secret key as inputs and returns a JWT.
The resulting JWT is then typically sent to a client after a user logs in. The client can include this JWT in subsequent requests for authentication and authorization purposes.
The server, in turn, can use the secret key to verify the JWT's authenticity and extract the information from the payload.
