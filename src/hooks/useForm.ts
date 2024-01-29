import {useState} from 'react';

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
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (name: string, value: string) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    if (validationRules[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: validationRules[name](value) || '',
      }));
    }
  };

  const validateForm = () => {
    const formErrors = Object.keys(validationRules).reduce((acc: any, name) => {
      const error = validationRules[name](values[name]);
      if (error) {
        acc[name] = error;
      }
      return acc;
    }, {});
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export {useForm};
