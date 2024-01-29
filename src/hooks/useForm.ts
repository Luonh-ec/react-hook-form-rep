import {useRef} from 'react';

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

  const handleChange = (name: string, value: string) => {
    valuesRef.current = {
      ...valuesRef.current,
      [name]: value,
    };

    console.log(valuesRef.current);
  };

  const validateField = (name: string, value: string) => {
    if (validationRules[name]) {
      errorsRef.current = {
        ...errorsRef.current,
        [name]: validationRules[name](value) || '',
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
    console.log(valuesRef.current);
  };

  return {
    values: valuesRef.current,
    errors: errorsRef.current,
    handleChange,
    handleSubmit,
  };
};

export {useForm};
