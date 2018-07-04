import { GET_CARD } from '../actions/index';

export default function(state={}, action) {
  switch(action.type) {
    case GET_CARD:
      return action.payload.data;
  }
  return state;
}