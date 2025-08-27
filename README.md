# Student Management System

A web-based application to efficiently manage student records.

## Overview
The Student Management System simplifies administrative tasks such as adding, updating, viewing, and deleting student. It’s built with a client–server architecture for modularity and scalability.

## Features
- CRUD operations for student records (name, age, department, address, contact, email.)
- Class management (viewing , adding/removing/updating students records)
- UI built with modern frameworks like React , TailwindCSS
- RESTful APIs for CRUD Operations

## Tech Stack
- **Frontend (client)**: e.g., React, Tailwind CSS.
- **Backend (server)**: e.g., Node.js with Express.  
- **Database**: e.g., MongoDB.
- **Other tools**: e.g. JWT for authentication, REST APIs

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
  PORT=3000
  DB_URI= Connection String
  JWT_SECRET=your_secret_key

  # In separate terminals
  cd server && npm start
  cd client && npm run dev

  
### 8. Configuration (optional but helpful)
```markdown
## Configuration
Environment variables are stored in `.env` files:
- `PORT`: Server listening port (default: 5000)
- `DB_URI`: Database connection string
- `JWT_SECRET`: Secret key for token generation

Additional configurations can include API base URLs, logging levels, etc.

## Usage

### Frontend
Once both client and server are running, use the web interface to:
- Register and manage students
- Add/edit records


### Backend API (via Postman or frontend)
```bash
# Get all students
GET http://localhost:5000/students/records

# Create a student
POST http://localhost:5000/students/add-record
Content-Type: application/json

{
  "fullName": "tony stark",
  "age": "25",
  "address": "new street new york",
  "contact" : "93881231387",
  "email":"tony@gmail.com",
  "department":"IT"
}


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




