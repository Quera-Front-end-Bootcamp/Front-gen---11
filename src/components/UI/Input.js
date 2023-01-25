import React from "react";
/* {...register(
    { name },
    {
      ...error,
    }
  )} */
export const Input = ({ placeholder, type, name, error, register }) => {
  console.log(register(name, error));
  return <input placeholder={placeholder} type={type} name={name} />;
};
