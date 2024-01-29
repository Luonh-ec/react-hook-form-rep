import {createContext, useContext, ReactNode, useState} from 'react';

interface FormContextProps {
  formData: Record<string, any>;
  handleChange: (name: string, value: any) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

const FormProvider: React.FC<FormProviderProps> = ({children}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contextValue: FormContextProps = {
    formData,
    handleChange,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context;
};

export {FormProvider, useFormContext};
