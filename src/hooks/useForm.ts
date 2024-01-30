import {useRef, useCallback, useState} from 'react';

interface FormValues {
  [key: string]: string;
}

interface ValidationRules {
  [key: string]: (value: string) => string | undefined;
}

interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  validationRules?: ValidationRules;
}

const useForm = ({
  initialValues,
  onSubmit,
  validationRules = {},
}: UseFormProps) => {
  const valuesRef = useRef<FormValues>(initialValues);
  const errorsRef = useRef<{[key: string]: string}>({});
  const forceUpdate = useForceUpdate();

  const handleChange = useCallback(
    (name: string, value: string) => {
      valuesRef.current = {
        ...valuesRef.current,
        [name]: value,
      };

      validateField(name, value);
      forceUpdate();
    },
    [forceUpdate],
  );

  const validateField = (name: string, value: string) => {
    if (validationRules[name]) {
      errorsRef.current = {
        ...errorsRef.current,
        [name]: validationRules[name](value) || '',
      };
    } else {
      errorsRef.current = {
        ...errorsRef.current,
        [name]: '',
      };
    }
  };

  const validateForm = () => {
    const formErrors = Object.keys(validationRules).reduce((acc: any, name) => {
      const error = validationRules[name](valuesRef.current[name]);
      if (error) {
        acc[name] = error;
      }
      return acc;
    }, {});
    errorsRef.current = formErrors;
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(valuesRef.current);
    }
  };

  return {
    values: valuesRef.current,
    errors: errorsRef.current,
    handleChange,
    handleSubmit,
  };
};

// Custom hook to force re-render
const useForceUpdate = () => {
  const [, forceUpdate] = useState({});
  return useCallback(() => forceUpdate({}), []);
};

export {useForm};
