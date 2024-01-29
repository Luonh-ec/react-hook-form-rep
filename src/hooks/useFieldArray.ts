import React, {useState} from 'react';
import {useFormContext} from './useFormContext';

interface FieldArrayProps {
  name: string;
}

interface FieldArrayMethods {
  append: (data: any) => void;
  remove: (index: number) => void;
  fields: any[]; // Adjust the type according to your form field structure
}

const useFieldArray = ({name}: FieldArrayProps): FieldArrayMethods => {
  const {formData, handleChange} = useFormContext();
  const [fieldArray, setFieldArray] = useState<any[]>(formData[name] || []);

  const append = (data: any) => {
    setFieldArray(prevFieldArray => [...prevFieldArray, data]);
    handleChange(name, [...fieldArray, data]);
  };

  const remove = (index: number) => {
    const updatedFieldArray = fieldArray.filter((_, i) => i !== index);
    setFieldArray(updatedFieldArray);
    handleChange(name, updatedFieldArray);
  };

  return {
    append,
    remove,
    fields: fieldArray,
  };
};

export {useFieldArray};
