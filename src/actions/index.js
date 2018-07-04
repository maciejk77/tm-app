import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const GET_CUSTOMER = 'GET_CUSTOMER';
export const GET_CARD = 'GET_CARD';

export function getCustomer(customerLastName) {
  const url = `${ROOT_URL}/customers/${customerLastName}`;
  const request = axios.get(url);

  return {
    type: GET_CUSTOMER,
    payload: request
  }
}

export function getCard(cardName) {
  debugger;
  const url = `${ROOT_URL}/cards/${cardName}`;
  const request = axios.get(url);

  return {
    type: GET_CARD,
    payload: request
  }
}