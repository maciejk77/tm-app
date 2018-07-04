import { combineReducers } from 'redux';
import CustomerReducer from './reducer_customer';
import CardReducer from './reducer_card';

const rootReducer = combineReducers({
  customer: CustomerReducer,
  card: CardReducer
});

export default rootReducer;