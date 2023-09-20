# filmInsiderBlog API Documentation

The filmInsiderBlog API provides endpoints for user authentication, managing blog posts, and handling comments.

## Base URL

The base URL for the API is: `http://localhost:5000`

## Authentication

The API uses JSON Web Tokens (JWT) for authentication. To access protected routes, you need to include a valid JWT token in the `Authorization` header of your requests.

Example Header:
Authorization: Bearer <your_jwt_token>


## Endpoints

### 1. User Authentication

#### Sign In
- **Endpoint**: `/users/signin`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Request Body**:

```json
{
  "username": "your_username",
  "password": "your_password"
}
Response:
200 OK if login is successful
401 Unauthorized if the credentials are invalid
Sign Up
Endpoint: /users/signup
Method: POST
Headers:
Content-Type: application/json
Request Body:

{
  "username": "your_username",
  "password": "your_password"
}
Response:
200 OK if registration is successful
400 Bad Request if there are validation errors or the user already exists


###2.Blog Management 
Add Blog
Endpoint: /data/addblog
Method: POST
Headers:
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "title": "Your Blog Post Title",
  "content": "Your Blog Post Content"
}
Response:
201 Created if the blog post is successfully created
400 Bad Request if there are validation errors in the request body
Get All Blogs
Endpoint: /data/blog
Method: GET
Headers:
Authorization: Bearer <your_jwt_token>
Response:
200 OK with an array of blog post objects
Get Blog by ID
Endpoint: /data/blog/:id
Method: GET
Headers:
Authorization: Bearer <your_jwt_token>
Response:
200 OK with the blog post object if it exists
404 Not Found if the blog post does not exist
Edit Blog
Endpoint: /data/editblog/:id
Method: PATCH
Headers:
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "title": "Updated Blog Post Title",
  "content": "Updated Blog Post Content"
}
Response:
200 OK if the blog post is successfully updated
400 Bad Request if there are validation errors in the request body
404 Not Found if the blog post does not exist
Delete Blog
Endpoint: /data/deleteblog/:id
Method: DELETE
Headers:
Authorization: Bearer <your_jwt_token>
Response:
204 No Content if the blog post is successfully deleted
404 Not Found if the blog post does not exist

## 3. Comment Management ##
Add Comment
Endpoint: /data/addcomment
Method: PATCH
Headers:
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "postId": "post_id",
  "text": "Your comment text"
}
Response:
201 Created if the comment is successfully created
400 Bad Request if there are validation errors in the request body
Delete Comment
Endpoint: /data/deletecomment
Method: PATCH
Headers:
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "ids": ["comment_id1", "comment_id2", ...]
}
Response:
204 No Content if the comments are successfully deleted
Edit Comment
Endpoint: /data/editcomment
Method: PATCH
Headers:
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "commentId": "comment_id",
  "text": "Updated comment text"
}

Response:
200 OK if the comment is successfully updated
400 Bad Request if there are validation errors in the request body
404 Not Found if the comment does not exist
This documentation provides an overview of the API's endpoints, request and response formats, and authentication. Be sure to replace <your_jwt_token> and <your-api-url.com> with the actual JWT token and API URL used in your project.



Y
