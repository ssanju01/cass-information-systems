# cass-information-systems

Please follow the given instructions to run the API & web-app projects

1. Create a database and update the name in API/appsettings.Development.json as given below:

```json
 "ConnectionStrings": {
    "DefaultConnect": "Server=.\\SQLEXPRESS;Database=<DBNAME>;Integrated Security=true;TrustServerCertificate=True;"
  },
  ```
  
  2. Run all the 3 SQL scripts from DataAccess/SQL folder
  3. Run the API project and a swagger page should open (https://localhost:7217/swagger/index.html)
  4. Now open the web-app folder to run the React app project
  5. Run the following commands and react app would be running on port :3000

 ```bash
 npm install
 npm start
  ```
  
  Note: To run the API project .Net 7 SDK must be installed on the target machine, download the latest SDK from given link https://dotnet.microsoft.com/en-us/download/dotnet/7.0
