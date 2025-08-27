# Student Management System

A web-based application to efficiently manage student records.


## Overview
The Student Management System simplifies administrative tasks such as adding, updating, viewing, and deleting student. It’s built with a client–server architecture for modularity and scalability.


## Features
- CRUD operations for student records
- Class management (viewing , adding/removing /updating students records)
- UI built with modern frameworks like react , tailwind css
- RESTful APIs 
- Registration and  Login with JWT and bcrypt.

## Tech Stack
- **Frontend (client)**: e.g., React,TailwindCSS
- **Backend (server)**: e.g., Node.js with Express.
- **Database**: e.g., MongoDB. 
- **Other tools**: e.g. JWT for authentication, Mongoose for Models and DB Connection .


## Installation

### Prerequisites
- [Node.js](https://nodejs.org) (version X.x.x)
- [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com)
- A running database (e.g., MongoDB instance)

### Steps
1. Clone the repo:
   ```bash
   git clone https://github.com/prajwal200425/Student_Mangement_System.git
   cd Student_Mangement_System

cd client && npm install
cd ../server && npm install

# server/.env
PORT=5000
DB_URI=mongodb://localhost:27017/student_mgmt
JWT_SECRET=your_secret_key

# In separate terminals
cd server && npm start
cd client && npm start

# Taillwind CSS Setup
nstall Tailwind CSS
       - npm install tailwindcss @tailwindcss/vite
       - Configure the Vite plugin :

         Add the @tailwindcss/vite plugin to your Vite configuration.

         vite.config.ts

         import { defineConfig } from 'vite'
         import tailwindcss from '@tailwindcss/vite'                # Import plugin
         export default defineConfig({
           plugins: [
             tailwindcss(),                                         # Use Here
           ],
         })

         
         Add an @import to your index.css file that imports Tailwind CSS.
          - @import "tailwindcss";

         Run Project : 
         npm run dev


### 8. Configuration (optional but helpful)
```markdown
## Configuration
Environment variables are stored in `.env` files:
- `PORT`: Server listening port (default: 5000)
- `DB_URI`: Database connection string
- `JWT_SECRET`: Secret key for token generation

Additional configurations can include API base URLs, logging levels, etc.

### Backend API (via Postman or curl)
```bash
# Get all students
GET http://localhost:5000/students

# Get Single Record
GET http://localhost:5000/students/id

# Add Record 
POST http://localhost:5000/students/add-record

# Update Record 
PUT http://localhost:5000/students/update/id

# Delete Record
DELETE http://localhost:5000/students/delete/id

# Registration & Login

POST http://localhost:5000/user/register
POST http://localhost:5000/user/login


### 10. Project Structure
```markdown
## Folder Structure

Student_Mangement_System/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
├── server/
│   ├── src/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── package.json
│   └── .env
└── README.md




