import { combineReducers } from 'redux';
import CustomerReducer from './reducer_customer';

const rootReducer = combineReducers({
  customer: CustomerReducer
});

export default rootReducer;