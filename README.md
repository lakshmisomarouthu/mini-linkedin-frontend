## mini-linkedin-frontend (React)

This is the frontend for Mini-LinkedIn — built using React with Axios, and connects to a Spring Boot backend.


## Setup (local)

``bash /vs code terminal
git clone https://github.com/<username>/mini-linkedin-frontend.git
cd mini-linkedin-frontend

npm install
npm start

## Backend URL setup
Make sure the backend is up and running at http://localhost:8080.
To change the base URL, use:

src/services/axios.js

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080",
});

# Features
User Registration and Login
Create Post
View All Posts
View Posts by Logged-in User

# API Calls Used
Action	Method	Endpoint	Payload Example
Register	POST	/users/register	{ "name":"Lakshmi", "email":"abc@gmail.com", "password":"12345" }
Login	POST	/users/login	{ "email":"abc@gmail.com", "password":"12345" }
Create Post	POST	/posts	{ "title":"First Post", "description":"Hello!", "userId":1 }
Get All Posts	GET	/posts	—
Get User Posts	GET	/posts/user/{userId}	—
Get Profile 
Logout functionality

# Testing Steps
Register a new user
Login with register emailId and password
Create a post using that userId
Fetch all posts
Fetch posts by that user

# Source Structure Overview

src/
Services/axios.js       -> Backend base URL
App.js                  -> Routing
components/             -> Reusable UI components
pages/                  -> Screens (Register, Login, Posts)

# Planned features /Future Scope
JWT-based authentication
Edit and delete post options
User profile and connection functionality
Search user name functionality

