import { Input } from 'antd';
import React from 'react';

type TypeInput = 'text' | 'digit';
type Props = {
  type_input: 'input' | 'select date' | 'select' | 'empty' | 'inputNote' | 'digit' | 'radio';
  defaultValue: string;
  className: string;
  label: string;
  width: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg' | undefined;
  placeholder: string;
  hidden?: boolean;
  disable: boolean;
  name: string;
  errorsMessage: string;
};
const InputCustom = (props: Props): React.ReactElement => {
  const {
    type_input,
    defaultValue,
    className,
    label,
    width,
    placeholder,
    hidden,
    disable,
    name,
    errorsMessage,
  } = props;
  return (
    <>
      {type_input !== 'digit' && (
        <Input
          name={name}
          width={width}
          disabled={disable}
          placeholder={placeholder}
          className={`${className} ${hidden}`}
        />
      )}
    </>
  );
};
export default InputCustom;
