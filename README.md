# Endpoint Test Application

This repository contains the Endpoint Test Application, a Node.js web application with a SQL Server backend,
containerized using Docker.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing
purposes.

### Prerequisites

- Docker
- Docker Compose
- SQL Server Client Tools (optional, for database creation)

### Installation and Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/Joeatc/endpoint-Test.git
   cd endpoint-Test
   ```

2. **Build and Run Docker Containers:**
   ```
   docker-compose up --build
   ```

### Database Setup

The application uses a SQL Server database named `Zeiterfassung`. Follow these steps to set up the database:

1. **Create the Database:**
    - The SQL Server database needs to be created manually before the first run of the application.
    - If you have exposed the SQL Server port (1433) in the `docker-compose.yml`, you can use any SQL Server client tool
      to connect to the database server and create the database.
    - SQL Command to create the database:
      ```sql
      CREATE DATABASE Zeiterfassung;
      ```

2. **Restart Docker Compose:**
    - After creating the database, restart the Docker environment to ensure the application can connect to the newly
      created database.
    - Stop the running containers:
      ```
      docker-compose down
      ```
    - Start the containers again:
      ```
      docker-compose up
      ```

3. **Database Initialization:**
    - On startup, the application will automatically create the necessary tables in the `Zeiterfassung` database using
      Sequelize ORM.

### Usage

- The application is now running and can be accessed at `http://localhost`.
- Use Postman or any other API testing tool to send requests to the application.

### API Endpoints

- `POST /myJson`: Endpoint to create new records in the database.
   This would be the body of the request
```JSON
{
  "date": "2023-06-27",
  "startTime": "06:30",
  "endTime": "07:30",
  "breakDuration": 0,
  "projectNumber": 5,
  "subprojectNumber": 17,
  "activity": "Applikationen an den Büroserver anpassen, damit der Workflow für die Registrierung der Stunden dort funktioniert.",
  "reviewRequired": "0"
}
```

- `GET /myGetTest`: Endpoint to show all records in the database.

### Troubleshooting

- If you encounter any issues with the database connection, ensure that the database `Zeiterfassung` exists and the SQL
  Server is running.
- Check the Docker logs for any error messages that might indicate connection issues or other errors.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the LICENSE.md file for details.

---