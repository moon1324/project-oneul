import React, { createContext, useState, useEffect } from 'react';

const FormContext = createContext({
    state:{formData:Array(6).fill('')},
    actions:{updateFormData:()=>{},
            resetFormData:()=>{},
            findEmptyFieldIndex: () => -1,
            },
});

const FormProvider = ({ children }) => {
  
    const [formData, setFormData] = useState(Array(6).fill(''));

    const updateFormData = (index, value) => {
        const newFormData = [...formData];
        newFormData[index] = value;
        setFormData(newFormData);
    }
  
    const resetFormData=()=>{
        setFormData([]);
    }
  
    const findEmptyFieldIndex = () => {
        return formData.findIndex(data => !data || data.trim() === "");
    };

    useEffect(() => {
        console.log(formData);}
        ,[formData]
    );

    const value = {
        state : {formData:formData},
        actions :{updateFormData: updateFormData, 
                  resetFormData:resetFormData,
                  findEmptyFieldIndex:findEmptyFieldIndex}, 
    }

    return (
      <FormContext.Provider value={value}>
        {children}
      </FormContext.Provider>
    );
};

export {FormProvider, FormContext}
