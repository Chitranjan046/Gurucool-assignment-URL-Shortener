# URL Shortener backend Project



## Features

- Shorten long URLs into a concise format.
- Store URL mappings in a MongoDB database.
- User registration and login for secure access.

## Routes

### Locally (http://localhost:4000)
### Hosted on Render (https://url-shortener-sd2u.onrender.com/)

#### User Registration:
### Locally (http://localhost:4000/auth/register)
### Hosted (https://url-shortener-sd2u.onrender.com/auth/register)
- **Endpoint:** `POST /auth/register`
- **Purpose:** Register a new user for accessing the URL shortening service securely.
- **Request Body (JSON):**
  ```json
  {
    "username": "username",
    "password": "password"
  }
- **Replace `:username`** with the create your username.
- **Replace `:password`** with the create your password.
## User Login

### Locally (http://localhost:4000/auth/login)
### Hosted (https://url-shortener-sd2u.onrender.com/auth/login)


- **Endpoint:** `POST /auth/login`
- **Purpose:** Authenticate and log in a registered user to access further functionalities.
- **Request Body (JSON):**
  ```json
  {
    "username": "Username",
    "password": "password"
  }
- **Replace `:username`** with the your username.
- **Replace `:password`** with the your password.
  #Response:
Successful login: Status 200 - `{ "message": "User logged in successfully" }` 
Invalid credentials: Status 401 - `{ "error": "Invalid credentials" }`

## URL Shortening

### Locally (http://localhost:4000/url/shorten)
### Hosted (https://url-shortener-sd2u.onrender.com/url/shorten)

- **Endpoint:** `POST /url/shorten`
- **Purpose:** Shorten a lengthy URL into a more manageable form.
- **Request Body (JSON):**
  ```json
 {
  "originalUrl": "https://puchd.ac.in/"
}

  ## Redirect to Original URL

### Locally (http://localhost:4000/url/:shortId)

### Hosted (https://url-shortener-sd2u.onrender.com/url/:shortId)

- **Endpoint:** `GET /url/:shortId`
- **Purpose:** Access the original URL by visiting the generated short URL.
- **Replace `:shortId`** with the actual short ID obtained from the shortened URL.


 # How to Setup
Download ZIP File and Extrat It.
Open it with VS COde.
Set UP your own mongoose cluster.
Open Terminal and Type "npm install".
Set up environment variables.
Create a .env file and Configure MongoDB connection.
and Then Type "npm start" which will run the project.



## Key Functionalities

### 1. User Registration and Authentication

#### Implementation:
- User registration endpoint (`POST /auth/register`) for new user sign-up.
- User authentication endpoint (`POST /auth/login`) for user login functionality.
- Passwords encrypted using bcrypt before storing in the database for enhanced security.

### 2. URL Shortening

#### Implementation:
- URL shortening endpoint (`POST /url/shorten`) to transform lengthy URLs into shorter versions.
- Storage of URL mappings (original URL and short ID) in a MongoDB database.
- Generation of unique short IDs for each original URL submitted.

### 3. Redirect to Original URL

#### Implementation:
- Redirection endpoint (`GET /url/:shortId`) to access the original URL by visiting the generated short URL.
- Proper handling and redirection based on the provided short ID.

## Implementation Details

### Project Structure:

The project follows a modular structure comprising the following folders:
- `config/`: Contains configurations such as database connection setup (`db.js`).
- `controllers/`: Houses controller logic for different functionalities (e.g., `authController.js`, `urlController.js`).
- `models/`: Includes Mongoose models for User and ShortenedUrl (`User.js`, `ShortenedUrl.js`).
- `routes/`: Holds route definitions for different endpoints (`authRoutes.js`, `urlRoutes.js`).
- `index.js`: Entry point file that initializes the Express server and connects routes.

### Database Usage:

- MongoDB used as the database for storing user information and URL mappings.
- Proper schema design for User and ShortenedUrl models to efficiently store and retrieve data.

### Security Measures:

- User passwords encrypted using bcrypt to prevent unauthorized access.
- Basic error handling and validation to mitigate common security vulnerabilities.

### Error Handling:

- Basic error handling implemented throughout the application to handle edge cases and provide meaningful responses.
- Use of appropriate status codes and error messages for different scenarios.


#### Usage:
To access the original URL:
1. Obtain the short ID from the generated short URL.
2. Use the short ID in the endpoint:

3. Replace `:shortId` with the actual short ID received from the shortened URL.

GET https://url-shortener-sd2u.onrender.com/url/:shortId




## Folder Structure

- config/
  - db.js
- controllers/
  - urlController.js
  - authController.js
- models/
  - User.js
  - ShortenedUrl.js
- routes/
  - authRoutes.js
  - urlRoutes.js
- index.js

### Hosted on Render (https://url-shortener-sd2u.onrender.com/)