import {useState} from 'react';

interface FormValues {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

const useForm = ({initialValues, onSubmit}: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (name: string, value: string) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export {useForm};
