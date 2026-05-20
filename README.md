# DIAG Onboarding - Backend API

This is the Express.js API and MongoDB database architecture supporting the DIAG onboarding frontend application. 

🔗 **Frontend Application:** https://obanlogistics-task.vercel.app/
🔗 **Frontend Source Code:** https://github.com/peter-sp-1/obanlogistics_task

###  Overview
This server handles the POST requests from the multi-step onboarding form, safely storing user data (including dynamic plan assignment based on team size), and serves GET requests to populate the frontend dashboard with the latest signups.

###  Running Locally

To run this backend on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/peter-sp-1/obanlogistics_task_backend.git
Install dependencies:

Bash
npm install
Set up your environment variables. Create a .env file in the root directory and add your MongoDB Atlas connection string:

Code snippet
MONGO_URI=mongodb+srv://<username>:<password>@cluster...
PORT=5000

Start the server:

Bash
node server.js

The server will be running on http://localhost:5000
