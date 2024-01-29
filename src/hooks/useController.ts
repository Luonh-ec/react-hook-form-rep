import {useState} from 'react';

interface UseControllerOptions {
  defaultValue?: string;
}

interface UseController {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

const useController = (options: UseControllerOptions = {}): UseController => {
  const {defaultValue = ''} = options;
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onBlur = () => {
    // onBlur logic
  };

  return {
    value,
    onChange,
    onBlur,
  };
};

export {useController};
