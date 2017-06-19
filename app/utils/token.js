import { getParameterByName } from '../utils/helper';

// Function to save the returned token from the queryparameter into the localStorage and then remove it from the URI
export function getToken() {
  if (getParameterByName('token') != null) {
    localStorage.setItem('Authorization', getParameterByName('token'));
    window.location.href = '/#/';
  }
}

