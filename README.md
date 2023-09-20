# filmInsiderBlog

## Overview

Welcome to the filmInsiderBlog project! This project involves creating a mini version of a RESTful API for a simple blogging platform. It includes user registration and login, blog post creation, reading, updating, and deletion (CRUD operations), a commenting feature, and a database to store all the data. 

**Author:** Jikkesh

## Dependencies

### Client-side:

- **@reduxjs/toolkit**: ^1.9.5
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0
- **antd**: ^5.8.6
- **axios**: ^1.5.0
- **bootstrap**: ^5.3.1
- **create-react-component**: ^0.0.4
- **jquery**: ^3.7.1
- **jwt-decode**: ^3.1.2
- **moment**: ^2.29.4
- **react**: ^18.2.0
- **react-copy-to-clipboard**: ^5.1.0
- **react-dom**: ^18.2.0
- **react-redux**: ^8.1.2
- **react-router-dom**: ^6.15.0
- **react-scripts**: 5.0.1
- **redux**: ^4.2.1
- **redux-thunk**: ^2.4.2
- **web-vitals**: ^2.1.4

### Server-side:

- **bcryptjs**: ^2.4.3
- **cors**: ^2.8.5
- **dotenv**: ^16.3.1
- **express**: ^4.18.2
- **jsonwebtoken**: ^9.0.2
- **mongodb**: ^6.0.0
- **mongoose**: ^7.5.0
- **nodemon**: ^3.0.1

## Project Description

Creating a mini version of a RESTful API for a simple blogging platform. Here are the specifics:

1. **User Registration and Login**:
   - Create a registration and login mechanism using JSON Web Tokens (JWT) for authentication.

2. **Blog Post Operations (CRUD)**:
   - Logged-in users should be able to create a blog post.
   - Read their own and others’ posts.
   - Edit their own posts.
   - Delete their own posts.

3. **Commenting Feature**:
   - Logged-in users should be able to comment on their own and others’ posts.
   - Edit or delete their own comments.

4. **Database**:
   - All the data should be stored in a database of your choice. (MongoDB atlas is used in this project)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   
2. Install the dependencies for both the client and server:

For the client:

cd client
npm install

For the server:

cd server
npm install

3. Configure your environment variables:
- Create a `.env` file for server-side configuration.
- Make sure to set the required environment variables (e.g., database connection details, JWT secret, etc.).

4. Start the development servers:
- For the client:
  ```
  cd client
  npm start
  ```

- For the server:
  ```
  cd server
  npm start
  ```

5. Open your browser and access the client application at `http://localhost:3000`.
6. Open your server on `http://localhost:5000`.

## License

This project is not licensed as it is project.

---

Feel free to contribute, report issues, or provide feedback. Happy coding!

