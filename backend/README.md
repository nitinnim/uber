# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description
Registers a new user in the system. Validates the input data and returns a JWT token along with the created user object upon successful registration.

## Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "string (min 2 chars, required)",
    "lastname": "string (min 2 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 5 chars, required)"
}
```

### Example
```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Status Codes
- **201 Created**: User registered successfully.
- **400 Bad Request**: Validation failed or missing required fields.

## Example Success Response (201)
```
{
  "token": "<jwt_token>",
  "user": {
    "_id": "60f7c2b5e1d2c8a1b8e4d123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

## Example Error Response (400)
```
{
  "errors": [
    {
      "msg": "First name must be at least 2 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description
Authenticates a user with email and password. Returns a JWT token and the user object on successful login.

## Request Body
Send a JSON object with the following structure:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 5 chars, required)"
}
```

### Example
```
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Status Codes
- **200 OK**: Login successful.
- **400 Bad Request**: Validation failed or missing required fields.
- **401 Unauthorized**: Invalid email or password.

## Example Success Response (200)
```
{
  "token": "<jwt_token>",
  "user": {
    "_id": "60f7c2b5e1d2c8a1b8e4d123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

## Example Error Response (401)
```
{
  "message": "Invalid email or password"
}
```

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the Authorization header or as a cookie.

## Authentication
- Send the JWT token as a Bearer token in the `Authorization` header:
  - `Authorization: Bearer <jwt_token>`
- Or as a cookie named `token`.

## Status Codes
- **200 OK**: Returns the user profile.
- **401 Unauthorized**: Missing or invalid token.

## Example Success Response (200)
```
{
  "_id": "60f7c2b5e1d2c8a1b8e4d123",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null,
  "__v": 0
}
```

## Example Error Response (401)
```
{
  "message": "Unauthorized"
}
```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description
Logs out the authenticated user by clearing the token cookie and blacklisting the token. Requires authentication.

## Authentication
- Send the JWT token as a Bearer token in the `Authorization` header or as a cookie named `token`.

## Status Codes
- **200 OK**: Logout successful.
- **401 Unauthorized**: Missing or invalid token.

## Example Success Response (200)
```
{
  "message": "Logged out successfully"
}
```

## Example Error Response (401)
```
{
  "message": "Unauthorized"
}
```
