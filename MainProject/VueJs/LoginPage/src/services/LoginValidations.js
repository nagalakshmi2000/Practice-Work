export function getLoginErrorMessage(message) {
  switch (message) {
    case 'INVALID_EMAIL': {
      return 'Email is Not Found';
    }
    case 'MISSING_PASSWORD': {
      return 'Invalid Password';

    }
    case 'User_Disabled': {
      return 'User is Disabled';
    }
    default:
      return 'Something Wrong Please try again'
  }

}