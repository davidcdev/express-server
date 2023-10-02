# Todo List API-Rest with Express

Manage your todo list with this Express-based API, providing functionalities for task management and authentication using JSON Web Tokens (JWT). The API supports data validation, authentication, and token validation to protect routes.

## Features

1. **Different Routes:**
   - `/view-list/all` (GET) - List all tasks.
   - `/view-list/?completed=true` (GET) - List completed tasks.
   - `/view-list/?completed=false` (GET) - List pending tasks.
   - `/view-list/:id` (GET) - View a specific task.
   - `/edit-list/add` (POST) - Create a new task.
   - `/edit-list/update/:id` (PUT) - Update a task.
   - `/edit-list/delete/:id` (DELETE) - Delete a task.

2. **Middleware for Data Validation:**
   - Includes middleware to validate the incoming request data for correctness and completeness.

3. **User Authentication:**
   - `/login` (POST) - Authenticate using credentials and receive a JWT.

4. **Middleware for Token Validation:**
   - Token validation middleware to ensure authenticated users with valid tokens can access protected routes.

## API Endpoints

### List All Tasks
- **Endpoint:** `GET /view-list/all` 

### List Completed Tasks
- **Endpoint:** `GET /view-list/?completed=true`

### List Pending Tasks
- **Endpoint:** `GET /view-list/?completed=false`

### View a Specific Task
- **Endpoint:** `GET /view-list/:id`

### Create a New Task
- **Endpoint:** `POST /edit-list/add`

### Update a Task
- **Endpoint:** `PUT /edit-list/update/:id`

### Delete a Task
- **Endpoint:** `DELETE /edit-list/delete/:id`

### User Authentication (Login)
- **Endpoint:** `POST /login`

## Usage

1. Authenticate using the login route and obtain a JWT.
2. Use the obtained JWT to access the protected routes.
3. Utilize the provided endpoints to manage your todo list.
