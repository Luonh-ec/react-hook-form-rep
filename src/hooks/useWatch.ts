import {useEffect} from 'react';
import {useFormContext} from './useFormContext';

const useWatch = (fieldNames: string | string[]) => {
  const {formData, handleChange} = useFormContext();

  useEffect(() => {
    const fieldsToWatch = Array.isArray(fieldNames) ? fieldNames : [fieldNames];

    fieldsToWatch.forEach(fieldName => {
      console.log(`Watching field ${fieldName}:`, formData[fieldName]);

      // You can add additional logic here if needed

      // For example, you may want to trigger some action when a specific field changes
      // You can use the value in formData[fieldName] as needed
    });
  }, [formData, fieldNames]);

  return formData;
};

export {useWatch};
