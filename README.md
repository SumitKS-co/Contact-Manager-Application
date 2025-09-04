## Contact-Manager-Application

**A basic full-stack CRUD application for managing user contacts.**

### Overview

A user-friendly web app that allows creating, reading, updating, and deleting contacts. Built with standard web technologies and following MVC architecture for clarity and easy maintenance.

### Key Features

* Add, view, edit, and delete contact entries
* Structured in MVC pattern: Models, Controllers, Routes, Middleware
* Organized folder structure with config, routes, controllers, models, and middleware

### Technology Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Frontend:** EJS templating, HTML, CSS, JavaScript

### Installation & Setup

```bash
git clone https://github.com/SumitKS-co/Contact-Manager-Application.git
cd Contact-Manager-Application
npm install
```

Add your MongoDB connection string to a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
```

Start the app:

```bash
npm start
```

Visit: `http://localhost:3000` (or your configured port) to use the app.

### Project Structure

```text
├── config/            # Configuration files (e.g., database)
├── controllers/       # Route handlers and logic
├── middleware/        # Custom middleware (e.g., validation)
├── models/            # Mongoose schemas
├── routes/            # Route definitions
├── views/             # EJS frontend templates
├── app.js             # Entry point
├── package.json       # Dependencies and scripts
```

---




