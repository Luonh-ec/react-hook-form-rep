import {useEffect} from 'react';
import {useFormContext} from './useFormContext';

const useWatch = (fieldNames: string | string[]) => {
  const {formData, handleChange} = useFormContext();

  useEffect(() => {
    const fieldsToWatch = Array.isArray(fieldNames) ? fieldNames : [fieldNames];

    fieldsToWatch.forEach(fieldName => {
      console.log(`Watching field ${fieldName}:`, formData[fieldName]);
    });
  }, [formData, fieldNames]);

  return formData;
};

export {useWatch};
