
# Task Manager

Task Manger is a simple and elegant solution for managing, monitoring, and planing projects and tasks. 
Task Manger lets you quickly create and manage tasks and helps you focus on your priorities. For manager of project, Task manager helps you to manage your project more efficiently by providing overview page to see team member's tasks.

### Deployed frontend

http://singular-focus.herokuapp.com/

### Deployed backend

https://polar-savannah-90234.herokuapp.com/

### Features

* Create and Login to your account.
* Create and manage tasks. 
* Mark tasks which user wants to focus on.
* Create and manage team.
* See a list of tasks members are currently working on.
* Add and remove members for project.

### Tech/framework used

* Frontend : HTML / CSS / Bulma / JavaScript / React
* Backend : Node.js / Express / Knex.js / PSQL

### Introductions

To use this app, you can either choose below 2 options.
1. Go to [https://rocky-ridge-33334.herokuapp.com](https://rocky-ridge-33334.herokuapp.com).
2. If you run it by forking and cloning github repositories and get the source code, follow below setup process.
  * Fork and clone this repository and [frontend repository](https://github.com/task-management-project/task-management-frontend).
  * Run ```npm install```
  * Run  ```createdb task_management_dev```
  * Run ```npm run latest```
  * Run ```npm run seed```
  * Run ``` cp .env.example .env```
  * Run ```npm run dev``` to use server in development mode
  * Run ```npm start``` to use server in production mode 
