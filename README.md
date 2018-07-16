# TM React app

## Project information

This app consumes a mock data put on Express.js server. The data inlude cutomer personal information and their finacial data e.g. which credit cards they are entitled to. It is assumed that FE app will receive JSON object with all that data to render it to the screen. After submission one of the Last Names in the search box the app will render customer information and list of allowed credit cards per customer. Clicking on ADD/REMOVE buttons on each individual listed card will update total credit allowance component and provide the sum of the selection.

## Instruction
- git clone the project repo
- ```yarn install``` to install all dependencies
- run ```node server.js``` to kickstart server
- ```yarn start``` to kickstart FE application
- type in last names into search box under logo e.g. **Rieck**, **Edmundson**, **Murphree** (data.json)

## Steps completed
- created a number of endpoints to serve **data.json** from data folder on **Express.js**
- used functional and class React components
- used **create-react-app** to scaffold application
- used **axios** to fetch data from endpoint
- Redux for getting customer data, dispatch action creator **GET_CUSTOMER** and flow through **reducer_customer.js** reducer
- added **redux-promise** middleware
- direct use of **axios** and mounting it with lifecycle method **componentDidMount()**
- used **SASS** compiled to **CSS** via ```gulp sass```

## To do
- to include ```node server.js``` to run with single command ```yarn start```
- add responsivness
- add some tests, app was not TDD
- FIX: gulpfile to run ```gulp default``` a seqence of watcher, sass, browserSync? 
- BUG: clearing results when name doesn't match ones in data.json
- BUG: selecting card with Rieck and changing to Edmundson keeps 'Anywhere Card' selected (shared by both customers), app should reset state after each Last Name submission
- refactoring needed to REDUX state management, passing state two level deep is prone to errors, may be acceptable for immediate parent/child components
 
## Requested elements in the final output
- Testing
- Extensibility
- Responsive web design
- Hand-rolled server configuration
- Mock endpoints

## Screenshot
![Screenshot](public/screenshot-tm.png)
