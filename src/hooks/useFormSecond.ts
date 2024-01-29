import {useRef, useState} from 'react';

type FormState = {
  isSubmitted: boolean;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isValid: boolean;
  submitCount: number;
  errors: Record<string, any>;
};

type FormMethods = {
  setError: (name: string, error: any) => void;
  clearErrors: () => void;
  setValue: (name: string, value: any, shouldValidate?: boolean) => void;
  resetField: (name: string) => void;
  reset: () => void;
  handleSubmit: (onSubmit: (data: Record<string, any>) => void) => () => void;
  control: Record<string, any>;
  setFocus: (name: string) => void;
};

const useFormSec = (rules: any): FormMethods => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    errors: {},
  });

  const _formControl = useRef<FormMethods | undefined>();

  _formControl.current = {
    setError: (name, error) => {
      // implement setError logic
    },
    clearErrors: () => {
      // implement clearErrors logic
    },
    setValue: (name, value, shouldValidate) => {
      // implement setValue logic
    },
    resetField: name => {
      // implement resetField logic
    },
    reset: () => {
      // implement reset logic
    },
    handleSubmit: onSubmit => () => {
      // implement handleSubmit logic
    },
    control: {},
    setFocus: name => {
      // implement setFocus logic
    },
  };

  return _formControl.current;
};

export default useFormSec;
