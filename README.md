# URL Shortener

A simple **backend-focused URL shortener** built with **Node.js, Express, MongoDB, and EJS, JWT Auth**.  
The project is primarily for practicing backend concepts like routing, database integration, middleware, and server-side rendering.  

⚠️ Note: The frontend is intentionally minimal and not polished — the main goal of this project is backend practice.  

---

## Features

- Shorten long URLs into easy-to-share links  
- Store and manage links using **MongoDB**  
- Track number of clicks for each shortened URL
- Authentication built using JWT Token Authentication
- Role base Authorization  
- Simple EJS-based server-side rendered views  
- RESTful backend structure with Express  

---

## Tech Stack

- **Node.js** – runtime environment  
- **Express.js** – backend framework  
- **MongoDB** – database for storing URLs
- **JsonWebTokens** - for authentication
- **EJS** – templating engine for rendering minimal views  

---

## Project Structure
```
url-shortener/
│── controllers/ # Handle request/response logic
│── middlewares/ # Custom middlewares (auth)
│── models/ # Mongoose models
│── routes/ # Route definitions
│── services/ # authentication service (JWT)
│── views/ # EJS templates
│── index.js # Main Express app
|── connection.js # mongoose connection functions
│── package.json
│── README.md
```

## Example API Endpoints
- _POST_ `/user/` - user signin
- _POST_ `/user/login` - user login
- _GET_ `/login/` - login page
- _GET_ `/signup` - signup page
- _GET_ `/admin` - renders all urls (admin only)
- _GET_ `/` - renders all urls of specific user
- _POST_ `/url/` - Create shortid
- _GET_ `/:shortId` - redirects to the original url
- _GET_ `/analytics/:shortId` - get click count of url

## Run Project
- clone repo
```bash
git clone https://github.com/divyanshu-patil/url-shortner.git
```
- navigate to project
```bash
cd url-shortner
```
- install dependencies
```bash
npm i
```
- start server
```bash
npm start
```
