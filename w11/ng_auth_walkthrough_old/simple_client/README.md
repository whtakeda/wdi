# Token Slinger Client

### Goals

Programmatically implement the credentials flow from Token Slinger!

1. Create a user on the database.
2. Upon success, begin token grant. Upon failure, display message.
3. Request a token by sending credentials (email and password). Upon
   success, store the token to local storage and begin authenticated
   request. Upon failure, display message.
4. Create an authenticated request: (`GET /me`). Sign it with the token.
   Upon success, display user info. Upon failure, display message.
