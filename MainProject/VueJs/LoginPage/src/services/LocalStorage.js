export function saveDetailsInLocalStorage(tokenDetails) {
  localStorage.setItem('userDetails', JSON.stringify(tokenDetails))
}
export function getToken() {
  let userDetailsString = localStorage.getItem('userDetails');
  if (userDetailsString) {
    let userDetails = JSON.parse(userDetailsString);
    return userDetails.idToken;
  }
  return '';
}
export function isUserAuthenticated() {
  let token = getToken();
  if (token) return true;
  return false;
}
export function removeDetailsFromLocalStorage() {
  localStorage.removeItem('userDetails');
}