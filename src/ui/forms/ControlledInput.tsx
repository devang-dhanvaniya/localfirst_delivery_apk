// PROJECT IMPORT
import Input, {InputProps} from './Input';

// THIRD - PARTY IMPORT
import {Controller} from 'react-hook-form';

interface ControlledInputProps extends InputProps {
  control: any;
}

const ControlledInput = (props: ControlledInputProps) => {
  const {control, name, ...rest} = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {ref, onChange, ...restt}}) => {
        return (
          <Input {...restt} onChangeText={text => onChange?.(text)} {...rest} />
        );
      }}
    />
  );
};

export default ControlledInput;
