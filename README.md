
# Registration Form with Node.js and MongoDB

## Overview

This repository contains a simple registration form implemented using HTML, CSS, Node.js, and MongoDB. Users can sign up and securely store their information.

## Prerequisites

Node.js: Download and install Node.js from https://nodejs.org/
Nodemon: Install globally using npm install -g nodemon
## Setup Instructions

**Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/registration-form.git
   cd registration-form
Use code with caution. Learn more
Install Dependencies:

Bash
npm install
Use code with caution. Learn more
Set Up MongoDB:

Create a MongoDB database and note down the connection string.
Replace the placeholder with your MongoDB connection string in config.js.
Start the Application:

Bash
nodemon src/index.js
Use code with caution. Learn more
Access the Application:

Open your browser and navigate to http://localhost:3000

## Project Structure

/public: Contains static files (CSS, images).
/src: Contains the main server file index.js.
/templates: Holds EJS templates (e.g., home.ejs, login.ejs).
## Dependencies Used

Express: Web application framework.
Mongoose: MongoDB object modeling.
Body-parser: Middleware for handling HTTP POST requests.
EJS: Embedded JavaScript templates.
Nodemon: Utility for automatic server restarts.
## Features

User registration with validation.
Secure password storage using hashing.
MongoDB integration for persistent data storage.
Thank you for using our registration form application!
