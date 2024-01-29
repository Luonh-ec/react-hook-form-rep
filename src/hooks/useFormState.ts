import {useEffect, useState} from 'react';
import {useFormContext} from './useFormContext';

interface FormState {
  dirty: boolean;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  // Add more form state properties as needed
}

interface FormStateWithFunctions extends FormState {
  handleFieldBlur: (fieldName: string) => void;
  setSubmitting: (isSubmitting: boolean) => void;
}

const useFormState = (): FormStateWithFunctions => {
  const {formData, handleChange} = useFormContext();
  const [formState, setFormState] = useState<FormState>({
    dirty: false,
    touched: {},
    isSubmitting: false,
    // Initialize more form state properties as needed
  });

  useEffect(() => {
    const calculateDirtyState = () => {
      const isDirty = Object.keys(formData).some(fieldName => {
        return formData[fieldName] !== undefined && formData[fieldName] !== '';
      });

      setFormState(prevFormState => ({
        ...prevFormState,
        dirty: isDirty,
      }));
    };

    calculateDirtyState();
  }, [formData]);

  const handleFieldBlur = (fieldName: string) => {
    setFormState(prevFormState => ({
      ...prevFormState,
      touched: {
        ...prevFormState.touched,
        [fieldName]: true,
      },
    }));
  };

  const setSubmitting = (isSubmitting: boolean) => {
    setFormState(prevFormState => ({
      ...prevFormState,
      isSubmitting,
    }));
  };

  return {
    dirty: formState.dirty,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    handleFieldBlur,
    setSubmitting,
  };
};

export {useFormState};
