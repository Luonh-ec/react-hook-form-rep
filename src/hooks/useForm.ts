import {useCallback, useRef, useState} from 'react';
import Validation from '../utils/validation';
import * as yup from 'yup';

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
  validationSchema?: yup.ObjectSchema<any>;
}

const useForm = ({
  initialValues,
  onSubmit,
  validationRules = {},
  validationSchema,
}: UseFormProps) => {
  const valuesRef = useRef<FormValues>(initialValues);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = useCallback((name: string, value: string) => {
    valuesRef.current = {
      ...valuesRef.current,
      [name]: value,
    };
  }, []);

  const handleBlur = useCallback((name: string) => {
    if (validationRules) {
      validateField(name, valuesRef.current[name]);
    }
    // else if (validationSchema) {
    //   validateFieldYup(name, valuesRef.current[name]);
    // }
  }, []);

  const validateField = (name: string, value: string) => {
    if (validationRules[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: validationRules[name](value) || '',
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateFieldYup = async (name: string, value: string) => {
    try {
      await validationSchema?.validateAt(name, valuesRef.current);
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    } catch (error: any) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error.message,
      }));
    }
  };

  const validateForm = () => {
    return !errors;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(valuesRef.current);
    } else {
      console.log('Error');
      // onSubmit(valuesRef.current);
    }
  };

  return {
    values: valuesRef.current,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export {useForm};
