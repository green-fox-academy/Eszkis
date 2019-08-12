# Registration component

We are going to create the registration part of a bigger web application.

The application must store the following information about the user:

- Email address
- Password (encrypted)
- Balance

## `GET /`

The following component must be rendered.

![Screenshot of the registration component](assets/registration-component.png)

The user must provide the following information:

- Email address
- Password

The user may provide the following information:

- Coupon code

The form must be submitted to `POST /api/users`. If the request was
successful it must display a positive message like **successful registration**
and clear the input fields otherwise display the message from the response.

Below the form you must display the username of the 5 latest registered users in
an unordered list.
The username is the first part of the email address. For example the username for
`noreply@example.com` is `noreply`.

## `POST /api/users`

This endpoint must handle the incoming registration requests.

- The user must not be allowed to register with the same email address more than
  once
- The password must be stored in the database using the
  [ROT13 substitution cipher](https://en.wikipedia.org/wiki/ROT13)
- The password must only contain letters from the Latin-alphabet
- If the coupon code **FIRST100** is provided then increase the new user's
  balance with 1000 units
- The coupon code must only work for the first 100 registrants

### Example

The request body must contain the information in the following format:

```json
{
  "email": "noreply@example.com",
  "password": "secure",
  "couponCode": "FIRST100"
}
```

If the registration was successful the response must have **201 Created** status
code otherwise it must have **400 Bad Request** and a descriptive message like
**email is already in use**, **invalid coupon code** or **password must only
contain letters from the Latin-alphabet**

```json
{
  "message": "email is already in use"
}
```

## `GET /api/users`

This endpoint must return all the users in the following format:

```json
[
  {
    "email": "noreply@example.com",
    "balance": 0
  },
  {
    "email": "john.doe@example.com",
    "balance": 100
  }
]
```

## Question

Given the following table named `employees`

| id | name            | role         |
|:---|:----------------|:-------------|
| 0  | Bořivoj Souček  | mentor       |
| 1  | Kocsis Ivett    | psychologist |
| 2  | Papp Patrícia   | mentor       |
| 3  | Dagmar Benešová | psychologist |

And given the following table named `devices`

| id | name                  | serial_number | type   | employee_id |
|:---|:----------------------|:--------------|:-------|:------------|
| 0  | Bořivoj's iPhone      | 123-412-512   | mobile | 0           |
| 1  | Kocsis Ivett's device | 321-234-155   | laptop | 1           |
| 2  | Bořivoj's mobile      | 321-234-155   | mobile | 0           |

Write an SQL query to select the name of those psychologists who have got at
least a mobile phone in an alphabetical order.

SELECT e.name 
FROM employees e 
LEFT JOIN devices d ON e.id=d.employee_id 
WHERE e.role = psychologists AND 
d.type = mobile
ORDER BY e.name ASC;