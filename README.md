# SourcePedia

This project is a documentation website that allows users to write, read, and search documentation. It was created as a final group project for acceptance as a part-time employee at Binus University. My contributions are in the backend and database.

## Tech Stack

**Client:** React, Typescript, CSS

**Server:** C#, .NET 6, SQLServer

## Connection String
To run this project, you will need to add the following configuration to your appsettings.json file in Backend directory

`"DefaultConnection": "Server=YOUR_SERVER_NAME;Database=YOUR_DATABASE_NAME;Trusted_Connection=True;Encrypt=False;"`

### Prerequisites

- Visual Studio 2022
- .NET 6
- SQL Server Management Studio 2019

## Steps

1. Clone the repository:

 ```bash
 git clone https://github.com/jonathancalvin/SourcePedia.git
 ```
2. Run Query:

   Open query.sql in SSMS 2019 then execute

4. Open Visual Studio:

- Go to Backend Directory
- Double Click the Backend.sln

4. Restore NuGet Packages:

  Right click on solution and chooe "Restore NuGet Packages".

5. Build the Backend:

   ```Ctrl+Shift+B```

6. Run the Backend:

   ```F5```
7. Go to the Frontend directory

```bash
  cd Frontend
```

8. Install dependencies

```bash
  npm install
```

9. Start the server

```bash
  npm start
```
