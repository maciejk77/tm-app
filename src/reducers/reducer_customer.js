import { GET_CUSTOMER } from '../actions/index';

export default function(state={}, action) {
  switch(action.type) {
    case GET_CUSTOMER:
      return action.payload.data;
  }
  return state;
}