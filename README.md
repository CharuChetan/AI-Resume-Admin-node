# User Management API

## Description
This project is a REST API for user management built with Node.js and Express. It includes functionality for creating, retrieving, updating, and deleting user details, secured with JWT token authentication.

## Features
- User registration
- User login
- Retrieve user details
- Update user information
- Delete user account
- JWT authentication for secure access

## Technologies Used
- Node.js
- Express
- MySQL
- JSON Web Tokens (JWT)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the database**
   - Update the database configuration in `src/config/db.js` with your MySQL credentials.

4. **Run the application**
   ```bash
   npm start
   ```

## API Endpoints

### User Registration
- **POST** `/api/users/register`
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: User details and JWT token.

### User Login
- **POST** `/api/users/login`
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: JWT token.

### Get User Details
- **GET** `/api/users/:id`
  - Headers: `Authorization: Bearer <token>`
  - Response: User details.

### Update User
- **PUT** `/api/users/:id`
  - Headers: `Authorization: Bearer <token>`
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: Updated user details.

### Delete User
- **DELETE** `/api/users/:id`
  - Headers: `Authorization: Bearer <token>`
  - Response: Confirmation message.

## Usage Examples
- Use tools like Postman or curl to interact with the API endpoints.
- Ensure to include the JWT token in the Authorization header for protected routes.

## License
This project is licensed under the ISC License.