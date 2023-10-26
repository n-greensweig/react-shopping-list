# React Shopping List

## Description

This shopping list app allows users to add items to and delete items from a shopping list. The app uses React and includes conditional styling for when users mark certain items as bought. All user input is stored in a "list" database in Postico.

## Screenshot



## Installation

1. Create a database named ```fs-react-shopping```
2. The queries in the database.sql file are set up to create all necessary tables and populate the needed data to allow the app to run correctly. The project is built on PostgreSQL, so you will need to have PostgreSQL installed for the app to work. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an ```npm install```
4. Run ```npm run server``` in your terminal
5. Run ```npm run client``` in your terminal
6. The ```npm run client``` command will open up a new browser tab for you


## Steps

### Part 1 - Set up
- [x] Create a database called ```fs-react-shopping```
- [x] Create router

### Part 2 - Create React Components
- [] Create the following React components: Form (with save button), Reset button, Clear button, Item, ItemList

### Part 3 - Append to the DOM
- [ ] Add React components to the DOM

### Part 4 - Styling and validation
- [ ] Add sweetalert confirmation messages
- [ ] Require responses in JSX with require keyword
- [ ] Also send back response from server if data is not formatted correctly for database
- [ ] Add red, green, and hover effects to buttons