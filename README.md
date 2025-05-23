# Kangalos Backend

**Kangalos Backend** is the server-side application for the Kangalos Final Project Management System. This system is designed to streamline the management of student final-year projects within educational institutions, facilitating processes from proposal submission to evaluation and archiving.

## 🚀 Features

* **User Roles Management**: Supports multiple user roles including Admin, Student, Supervisor, and Panelist.
* **Project Lifecycle Management**: Handles project proposals, approvals, progress tracking, and final submissions.
* **Evaluation System**: Enables supervisors and panelists to assess and grade student projects.
* **Secure Authentication**: Implements JWT-based authentication for secure access control.
* **Database Integration**: Utilizes PostgreSQL for robust data storage and management.

## 💠 Tech Stack

* **Backend Framework**: Node.js with Express.js
* **Database**: PostgreSQL
* **ORM**: Prisma
* **Authentication**: JSON Web Tokens (JWT)
* **Environment Management**: dotenv

## 📂 Project Structure

```
kangalos-backend/
├── prisma/             # Prisma schema and migrations
├── src/
│   ├── controllers/    # Route handlers
│   ├── middleware/     # Custom middleware
│   ├── prisma/         # Prisma models
│   ├── routes/         # API route definitions
│   └── utils/          # Utility functions
├── .env                # Environment variables
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/binaryhubrw/Kangalos-Backend.git
   cd Kangalos-Backend
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>?schema=public
   JWT_SECRET=your_jwt_secret
   ```

   Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your PostgreSQL credentials.

4. **Set Up the Database**

   Generate Prisma client and apply migrations:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the Server**

   ```bash
   npm run dev
   ```

   The server should now be running at `http://localhost:3000`.

## 📬 API Endpoints

The API follows RESTful conventions. Below are some of the primary endpoints:

* `POST /api/auth/register` - Register a new user
* `POST /api/auth/login` - Authenticate a user and return a JWT
* `GET /api/projects` - Retrieve all projects
* `POST /api/projects` - Create a new project
* `PUT /api/projects/:id` - Update project details
* `DELETE /api/projects/:id` - Delete a project

*Note: For a comprehensive list of endpoints and their specifications, refer to the API documentation.*


## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📧 Contact

For questions or support, please contact [binaryhubrw](mailto:support@binaryhub.rw).
