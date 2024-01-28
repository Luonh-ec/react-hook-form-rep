import {useState} from 'react';
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from './../helpers/validationChecks';

const inputFocused = (errors: any) => {
  const errorsToArray = Object.entries(errors);
  const reducedFieldProps = errorsToArray.reduce(
    (accumulate: any, [field, fieldProps]) => {
      accumulate[field] = Object.assign({}, fieldProps, {focused: true});
      return accumulate;
    },
    {},
  );
  return reducedFieldProps;
};

export const useFormValidator = (formData: any) => {
  const [errors, setError] = useState({
    username: {
      focused: false,
      error: false,
      message: '',
    },
    email: {
      focused: false,
      error: false,
      message: '',
    },
    password: {
      focused: false,
      error: false,
      message: '',
    },
  });

  const validateFormData = ({
    formData,
    field,
    errors,
    applyInputFocused = false,
  }: any) => {
    let isValid = true;
    const {username, email, password} = formData;
    let updatedError = JSON.parse(JSON.stringify(errors));

    if (applyInputFocused) {
      updatedError = inputFocused(errors);
    }

    if (
      updatedError.username.focused &&
      (field ? field === 'username' : true)
    ) {
      const usernameMessage = validateUsername(username);
      updatedError.username.error = !!usernameMessage;
      updatedError.username.message = usernameMessage;
      if (!!usernameMessage) isValid = false;
    }

    if (updatedError.email.focused && (field ? field === 'email' : true)) {
      const emailMessage = validateEmail(email);
      updatedError.email.error = !!emailMessage;
      updatedError.email.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }

    if (
      updatedError.password.focused &&
      (field ? field === 'password' : true)
    ) {
      const passwordMessage = validatePassword(password);
      updatedError.password.error = !!passwordMessage;
      updatedError.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }

    setError(updatedError);

    return {
      isValid,
      errors,
    };
  };

  const onBlurInput = (e: any) => {
    const field = e.target.name;
    const updateErrors = {
      ...errors,
      [field]: {
        ...errors[field as keyof typeof errors],
        focused: true,
      },
    };
    validateFormData({formData, field, errors: updateErrors});
  };

  return {
    validateFormData,
    onBlurInput,
    errors,
  };
};
