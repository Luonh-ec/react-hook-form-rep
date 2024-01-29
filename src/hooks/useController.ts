import {useState} from 'react';

const usecontroller = () => {
  const [valueInput, setValueInput] = useState('');
  const handleChange = (value: string) => {
    setValueInput(value);
  };

  console.log('value in here', valueInput);

  return {valueInput, handleChange};
};

export default usecontroller;
