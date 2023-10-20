# Listings App - Server Side
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.17.0-brightgreen)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green)](https://www.mongodb.com/)

This is the server-side of the Listings App, a full-stack application demonstrating proficiency in building a MERN (MongoDB, Express.js, React, Node.js) stack app with CRUD functionality. The app displays real estate listings from my career as a real estate broker and allows authenticated users to view, create, edit, update, and delete listings.

The server is built using Node.js, Express.js, and MongoDB.

## Live Demo
Check out the live demo of the Real Estate Listings App [here](https://listings-app-client.vercel.app/).

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contact Information](#contact-information)

## Technologies Used
- Node.js (>=14.17.0)
- Express.js (4.18.2)
- MongoDB (Latest)
- Bcrypt (5.1.0)
- JSON Web Token (JWT) (9.0.0)
- Cookie-parser (1.4.6)
- Cors (2.8.5)
- Dotenv (16.1.4)
- Method-override (3.0.0)
- Mongoose (7.2.4)

## Installation
To run the server locally, follow these steps:

1. Clone this repository: `git clone https://github.com/8cott/listings-app-server.git`
2. Navigate to the project directory: `cd listings-app-server`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## API Endpoints
The server exposes the following API endpoints:

- `GET /listings`: Get all listings
- `GET /listings/:id`: Get a specific listing by ID
- `POST /listings`: Create a new listing
- `PUT /listings/:id`: Update a listing by ID
- `DELETE /listings/:id`: Delete a listing by ID

For more detailed documentation on the API endpoints, please refer to the [API documentation](API.md).

## Deployment
The client side of this app is deployed on [Heroku](https://www.heroku.com/)

## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact Information
For any questions or feedback, please feel free to reach out to me:
- Scott Rubin
- Email: scottrubin@gmail.com
