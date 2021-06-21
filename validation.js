const validation = (step, user) => {
  const errors = {};
  const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
  switch (step) {
    case 1:
      if (!user.firstName) {
        errors.firstName = 'Required';
      
      } else if (user.firstName.length < 2) {
        errors.firstName = 'Must be 2 characters or more';
      }
      if (!user.lastName) {
        errors.lastName = 'Required';
      } else if (user.lastName.length < 2) {
        errors.lastName = 'Must be 2 characters or more';
      }
      if (!user.password) {
        errors.password = 'Required';
      
      } else if (user.password.length < 8) {
        errors.password = 'Must be 5 characters or more';
        
      }
      if (!user.passwordRepeat) {
        errors.passwordRepeat = 'Required';
      } else if (user.password !== user.passwordRepeat) {
        errors.passwordRepeat = 'Must be equal password';
      }
      break;
    case 2:
      if (!user.email) {
        errors.email = 'Required';
      } else if (!REGEX_EMAIL.test(user.email)) {
        errors.email = 'Invalid email address';
      }
      
      
      
      break;
    case 3:
      if (!user.avatar) {
        errors.avatar = "Required";
      }
      break;
    default:
      break;
  }

  return errors;
}

export default validation;