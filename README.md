
# Notes App

A simple notes application with user authentication, CRUD functionality, and a React-based frontend for creating and viewing notes. The app allows users to register, log in, create, view, update, and delete notes.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Documentation](#api-documentation)

## Features

- **User Authentication**: Register and login using JWT tokens.
- **Notes CRUD**: Create, read, update, and delete notes.
- **Responsive Frontend**: Built using React for a smooth user experience.
- **Simple API**: Exposes a REST API for managing notes.
  
## Technologies

- **Backend**:
  - Django
  - Django REST Framework (DRF)
  - JWT Authentication (`djangorestframework-simplejwt`)
  - PostgreSQL (or your preferred database)

- **Frontend**:
  - React
  - Axios for API requests
  - React Router for navigation

- **Testing**:
  - Django Test Framework
  - React Testing Library
  
## Prerequisites

Before you start, make sure you have the following installed on your machine:

- Python 3.9+ for the backend
- Node.js and npm for the frontend
- PostgreSQL (or the database of your choice)
- Git for version control

---

## Backend Setup

1. **Clone the Repository**:

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app/backend
   ```

2. **Create a Virtual Environment**:

   Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. **Install Dependencies**:

   Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. **Database Setup**:

   Make sure you have PostgreSQL (or another database) set up. If using PostgreSQL, update the `DATABASES` setting in `settings.py` to match your credentials.

   Then, apply the migrations to create the necessary database tables:

   ```bash
   python manage.py migrate
   ```

5. **Create a Superuser**:

   Create a superuser to be able to log into the Django admin:

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to create the superuser account.

6. **Run the Server**:

   Start the Django development server:

   ```bash
   python manage.py runserver
   ```

   The backend should now be accessible at `http://localhost:8000/`.

---

## Frontend Setup

1. **Navigate to the Frontend Directory**:

   Go to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:

   Install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Running the Frontend**:

   Start the React development server:

   ```bash
   npm start
   ```

   The frontend should now be accessible at `http://localhost:3000/`.

---

## Running the Application

1. Make sure both the backend and frontend servers are running.
2. Open your browser and go to `http://localhost:3000/`.
3. Use the application to register a new user or log in with existing credentials (JWT token is stored in local storage).
4. Create, view, update, and delete notes.

---

## Testing

### Backend Testing (Django)

Django tests are set up to ensure that the backend APIs work correctly. These tests can be run as follows:

1. **Run Tests**:

   To run the Django tests:

   ```bash
   python manage.py test
   ```

   This will execute all the backend tests, including the ones for user authentication and notes CRUD operations.

### Frontend Testing (React)

The frontend includes tests using React Testing Library to ensure that components render and behave correctly.

1. **Run Tests**:

   To run the frontend tests:

   ```bash
   npm test
   ```

   This will run the React unit tests, ensuring that components like `Notes` and `NoteForm` are working as expected.

---

## API Documentation

### Authentication API

- **POST** `/api/auth/login/`
  - **Request**: 
    ```json
    {
      "username": "testuser",
      "password": "testpassword"
    }
    ```
  - **Response**: 
    ```json
    {
      "access": "jwt_token",
      "refresh": "refresh_token"
    }
    ```

### Notes API

- **GET** `/api/notes/` — Get all notes.
- **POST** `/api/notes/` — Create a new note.
  - **Request**:
    ```json
    {
      "title": "New Note",
      "description": "This is a description of the new note."
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "title": "New Note",
      "description": "This is a description of the new note.",
      "created_at": "2024-12-23T12:00:00Z"
    }
    ```

- **PUT** `/api/notes/{id}/` — Update a note by ID.
- **DELETE** `/api/notes/{id}/` — Delete a note by ID.

---

## Troubleshooting

- If the frontend cannot connect to the backend, ensure that both servers are running on different ports (React on `3000`, Django on `8000`).
- If you encounter CORS issues, you may need to configure the `django-cors-headers` package.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
