#TM React app

- created a number of endpoints to serve **data.json** from data folder on **Express.js**
- used functional and class React components
- used **create-react-app** to scaffold application
- used **axios** to fetch data from endpoint
- Redux for getting customer data, dispatch action creator **GET_CUSTOMER** and flow through **reducer_customer.js** reducer
- added **redux-promise** middleware
- direct use of **axios** and mounting it with lifecycle method **componentDidMount()**

##Instruction
- git clone the project repo
- ```yarn install``` to install all dependencies
- run ```node server.js``` to kickstart server
- ```yarn start``` to kickstart FE application

##To do
- add counter TOTAL CREDIT
- toggle ADD / REMOVE button (or clickable component?) and associated action to update TOTAL CREDIT allowance
- add styling, use CSS in JS?, reactstrap?, Sass?
- add responsivness
- add some tests, app was not TDD
- add webpack/gulp to run server & FE application with one command
- change PORT, server & FE share the same port 3000 at the moment, yarn switches to 3001 to run it 

##Requested elements in the final output
- Testing
- Extensibility
- Responsive web design
- Hand-rolled server configuration
- Mock endpoints
