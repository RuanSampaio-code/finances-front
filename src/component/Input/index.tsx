import React, { useRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue: any;
}

const Input: React.FC<Props> = ({ setValue, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return <input ref={inputRef} {...rest} onChange={onChangeInput} />;
};

export default Input;
