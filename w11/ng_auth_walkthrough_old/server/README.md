# Token Slinger

A very featureless application, the Token Slinger is all about makin' 
those tokes. Ie, making tokens (for you *squares*).

## Explore

Run the application the old-fashioned way: first `mongod` and then…

```
$ npm install
$ nodemon
```

Team up with a partner and explore the application. Together you should,
using Postman:

1.  **create a new user;**
2.  **generate a token with that user's credentials;**
3.  **make an authenticated request with that token to `/me`.**

All you have at your disposal is the API documentation found at the site
root, the code itself, and any error messages you get back from 
requests.

## Goals

While exploring, you should take special note of each of the steps you
must follow to get authentication ("the flow"), and the steps that each
request follows to ensure its vailidity.

You must:

1.  **Create a diagram of the credential flow.**
2.  **List the steps for each request.**
3.  **List any new technologies or libraries used that we haven't seen.**
4.  **Attempt to identify any major weaknesses in Token Slinger's security.**
5.  **Attempt to identify ways to simplify or improve the existing code.**
