import React from "react";

import InputField from './InputField';


export default function Contacts(props) {
  const { user: { email }, errors, onChangeInput } = props;

  

 

  return (
    <>
      <InputField
        id="email"
        labelText="Email"
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={onChangeInput}
        error={errors.email}
      />
      
      
         
      
    </>
  );
}