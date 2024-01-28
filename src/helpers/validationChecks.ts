export const validateUsername = (username: string) => {
  const isBetween = (length: any, min: any, max: any) =>
    length < min || length > max ? false : true;
  const min = 4;
  const max = 25;
  const userName = username.trim();

  if (!userName) {
    return 'Username is required';
  } else if (!isBetween(userName.length, min, max)) {
    return `Username must be between ${min} and ${max} charaters`;
  } else if (
    !new RegExp(/^(?=[a-z0-9._]{3,30}$)(?!.*[_.]{2})[^_.].*[^_.]$/).test(
      userName,
    )
  ) {
    return 'User name can only contain [a-z],[A-Z],[0,9],[.]';
  }
  return '';
};

export const validateEmail = (email: string) => {
  const Email = email.trim();
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!Email) {
    return 'Email is required';
  } else if (!new RegExp(emailRegex).test(Email)) {
    return 'incorrect email format';
  }
  return '';
};

export const validatePassword = (password: string) => {
  const Password = password.trim();
  const passwordReg = /^([A-Za-z0-9!@#$%^&*._]){6,}$/;

  if (!Password) {
    return 'Password is required';
  } else if (!new RegExp(passwordReg).test(Password)) {
    return 'Incorrect password format';
  }
  return '';
};
