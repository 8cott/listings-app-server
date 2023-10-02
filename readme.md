# Listings App - Server Side
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.17.0-brightgreen)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green)](https://www.mongodb.com/)

This is the client-side of the Listings App, a full-stack application demonstrating proficiency in building a MERN (MongoDB, Express.js, React, Node.js) stack app with CRUD functionality. The app displays real estate listings from my career as a real estate broker and allows authenticated users to view, create, edit, update, and delete listings.

The server is built using Node.js, Express.js, and MongoDB.

## Live Demo
Check out the live demo of the Real Estate Listings App [here](https://listings-app-client.vercel.app/).

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup & Installation](#installation)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contact Information](#contact-information)

## Technologies Used

- **Backend:**
  - [Flask](https://flask.palletsprojects.com/): A lightweight web framework for building the backend of the application.
  - [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/): Flask extension for JSON Web Tokens (JWT) authentication.
  - [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/): Integration of SQLAlchemy with Flask for database management.
  - [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/): Flask extension for password hashing.
  - [Flask-Migrate](https://flask-migrate.readthedocs.io/): Flask extension for database migrations.
  - [OpenAI API](https://beta.openai.com/docs/): Utilized to generate custom diet and fitness plans using GPT-3.5 Turbo.
  
- **Frontend:**
  - [React](https://reactjs.org/): A JavaScript library for building the user interface.
  - [Vite](https://vitejs.dev/): A fast build tool and development server for frontend projects.
  
- **Database:**
  - [PostgreSQL](https://www.postgresql.org/): A powerful, open-source relational database system.

- **Deployment:**
  - [Heroku](https://www.heroku.com/): A cloud platform used for hosting the application.

- **Version Control:**
  - [Git](https://git-scm.com/): Distributed version control system used for managing project source code.

- **Package Management:**
  - [pip](https://pip.pypa.io/en/stable/): Python package manager for installing project dependencies.
  
- **Other Tools:**
  - [dotenv](https://pypi.org/project/python-dotenv/): Used for loading environment variables from a `.env` file.
  - [axios](https://axios-http.com/): A promise-based HTTP client for making API requests in React.
  - [Flask-Cors](https://flask-cors.readthedocs.io/): Flask extension for handling Cross-Origin Resource Sharing (CORS).

## Setup and Installation

To set up and run the GPT Fitness application, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd gpt-fitness

2. **Create a Virtual Environment (Optional but Recommended):**
python -m venv venv
source venv/bin/activate

3. **Install Dependencies:**
pip install -r requirements.txt

4. **Set Environment Variables:**
Create a .env file in the project root and add the following environment variables:
OPENAI_API_KEY=your_openai_api_key
SQLALCHEMY_DATABASE_URI=your_database_uri
JWT_SECRET_KEY=your_jwt_secret_key

5. **Initialize the Database:**
flask db init
flask db migrate
flask db upgrade

6. **Run the Application**
python3 run.py

## API Endpoints

The GPT Fitness application provides the following API endpoints for interacting with the backend:

1. **Generate Custom Plan (POST):**
   - Endpoint: `/generate_plan`
   - Method: POST
   - Description: Generate a custom diet and fitness plan based on user inputs.
   - Authentication: Not required.
   
2. **Save Plan (POST, JWT protected):**
   - Endpoint: `/save_plan`
   - Method: POST
   - Description: Save a generated plan for a user.
   - Authentication: Requires JWT token.
   
3. **Get User's Saved Plans (GET, JWT protected):**
   - Endpoint: `/my_plans`
   - Method: GET
   - Description: Retrieve all saved plans for the authenticated user.
   - Authentication: Requires JWT token.
   
4. **Get Specific Saved Plan (GET, JWT protected):**
   - Endpoint: `/my_plans/{plan_id}`
   - Method: GET
   - Description: Retrieve a specific saved plan by its ID for the authenticated user.
   - Authentication: Requires JWT token.
   
5. **Delete Saved Plan (DELETE, JWT protected):**
   - Endpoint: `/my_plans/{plan_id}`
   - Method: DELETE
   - Description: Delete a specific saved plan by its ID for the authenticated user.
   - Authentication: Requires JWT token.
   
6. **Create User Account (POST):**
   - Endpoint: `/users`
   - Method: POST
   - Description: Create a new user account.
   - Authentication: Not required.
   
7. **Get User Details (GET, JWT protected):**
   - Endpoint: `/users/{user_id}`
   - Method: GET
   - Description: Retrieve user details by user ID.
   - Authentication: Requires JWT token.
   
8. **Update User Details (PUT, JWT protected):**
   - Endpoint: `/users/{user_id}`
   - Method: PUT
   - Description: Update user details by user ID.
   - Authentication: Requires JWT token.
   
9. **Delete User Account (DELETE, JWT protected):**
   - Endpoint: `/users/{user_id}`
   - Method: DELETE
   - Description: Delete a user account by user ID.
   - Authentication: Requires JWT token.
   
10. **User Login (POST):**
    - Endpoint: `/login`
    - Method: POST
    - Description: User login to obtain an access token.
    - Authentication: Not required.

Each endpoint serves a specific purpose within the application, and the documentation in the code (`app/routes.py`) provides more details on their functionality and usage.

Feel free to customize this section as needed and add any additional information or explanations for each endpoint.

## Deployment
The client side of this app is deployed on [Heroku](https://gpt-fitness-server-5c53c1ab4ccd.herokuapp.com/)

## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact Information
For any questions or feedback, please feel free to reach out to me:
- Scott Rubin
- Email: scottrubin@gmail.com