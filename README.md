# screeningForLIS
Description: A single form with input fields.  The web application is locally hosted with Node JS and 
has a local mysql database called screeningLIS.

Setup: 
Step 1: Clone the repository.

Step 2: Install Node and MySQL

- If you do not have node on your computer download and install it here: https://nodejs.org/en/download
  Follow the installation instructions once downloaded.

- If you do not have mysql on your computer download and install it here: 
  https://dev.mysql.com/downloads/

- Once these are both downloaded open your terminal and instaled run: 
  npm install mysql

Step 3: Load the dump file for the database.  

- First locate the repository directory in the terminal.  

- Next login to your mysql as root:
  mysql -u root -p

- Next create the necessary local database:
  CREATE DATABASE screeningLIS;

- Load the dump file with the source command, but first update the path to the repository to be the path on your computer:
  source <Enter your path to the repo here>/screeningForLIS/databaseBackup/dump.sql;

- Exit mysql
  exit;

Step 3: Once in the correct directory in the terminal run:
npm start

This will deploy the web application to a local host at port 3030.
This can be found with this link: http://localhost:3030/

