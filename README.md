# screeningForLIS
Description: A single form with input fields.  The web application is locally hosted with Node JS and 
has a local mysql database called screeningLIS.

Setup: 
Step 1: Clone the repository.  
git clone git@github.com:noravanvleet/screeningForLIS.git

Step 2: Install Node and MySQL
- If you do not have node on your computer download and install it here: https://nodejs.org/en/download
  Follow the installation instructions once downloaded.
- If you do not have mysql on your computer open the terminal and run:
  npm install mysql

Step 3: Load the dump file for the database.  
- First locate the repository directory in the terminal.  Then run:
  mysql -u root -p
  CREATE DATABASE screeningLIS;
- Then update the path/to/repo to be the path to the repository on your computer.  One run,
  source path/to/repo/screeningForLIS/databaseBackup/dump.sql;
  exit;

Step 3: Once in the correct directory in the terminal run:
npm start


This will deploy the web application to a local host at port 3030.
This can be found with this link: http://localhost:3030/

