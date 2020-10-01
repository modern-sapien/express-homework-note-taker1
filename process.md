## Process Document

Assignment: An Express Based Note Taker Applicaition

## FUNTIONALITY
    *   Application that can write, save & delete notes
    *   Application uses express backend
        *  retrive note data from a JSON file

## KEEP IN MIND
    *   Application Front End has already been written
    *   Task is to connect the front end & backend

## TO DO

1. Initialization
    install     EXPRESS
    install     NODEMON

    * DEPLOY TO HEROKU
    
2. Create server.js file
    *   Initialize with 5 step process (including middleware) using express to run a server & listen appropriately
    
    *   HTML routes needed
        *   GET `/notes`  - returns `notes.html` file
        *   GET `*`   - returns `index.html` file
    
    *   The application should have a `db.json` file that will mimic an actual server to store & retrieve notes using `fs` module

    *   API routes needed
        *   GET `/api/notes` - should read the `db.json` file & return all saved notes as JSON
        *   POST `/api/notes` - should receive a new note to save on the request body, & add it to the `db.json` file & return new note to client
        *   DELETE `/api/notes/:id` - should receive a query parameter containing the id of a note to delete. 
        EACH note needs a unique id to target for deletion
        & then to rewrite the notes back to the db.json file SANS the deleted note  

I need to intialize a server.js fie that allows for functionality for a user to write, save & delete NOTES that are handled by middleware 

3. This needs to run on HEROKU for the sake of persistence of information of the user's notes.

* Initialize the server.js