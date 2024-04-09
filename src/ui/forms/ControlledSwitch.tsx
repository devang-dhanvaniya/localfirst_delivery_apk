// PROJECT IMPORT
import UISwitch, { SwitchProps } from './Switch';

// THIRD - PARTY IMPORT
import {Controller} from 'react-hook-form';

interface ControlledDropdownProps extends SwitchProps {
  control: any;
  name:string
}

const ControlledSwitch = (props: ControlledDropdownProps) => {
  const {control, name, ...rest} = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {ref, onChange, ...restt}}) => {
        return (
          <UISwitch {...restt} onValueChange={e => onChange(e)} {...rest} />
        );
      }}
    />
  );
};

export default ControlledSwitch;
