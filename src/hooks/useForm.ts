import {FormEvent, useState} from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormHook {
  formData: FormData;
  handleChange: (name: string, value: string) => void;
  handleSubmit: (
    callback: (data: FormData) => void,
  ) => (event: FormEvent) => void;
}

const useForm = (initialValues: FormData): FormHook => {
  const [formData, setFormData] = useState<FormData>(initialValues);

  const handleChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =
    (callback: (data: FormData) => void) => (event: FormEvent) => {
      event.preventDefault();
      callback(formData);
    };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
