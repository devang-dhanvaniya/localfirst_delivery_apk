// PROJECT IMPORT
import Dropdown, {DropdownProps} from './Dropdown';

// THIRD - PARTY IMPORT
import {Controller} from 'react-hook-form';

interface ControlledDropdownProps extends DropdownProps {
  control: any;
}

const ControlledDropdown = (props: ControlledDropdownProps) => {
  const {control, name, ...rest} = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {ref, onChange, ...restt}}) => {
        return (
          <Dropdown
            {...restt}
            onChangeText={(text,e) => onChange?.(text,e)}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledDropdown;
