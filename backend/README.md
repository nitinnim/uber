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
