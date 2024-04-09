// PROJECT IMPORT

// THIRD - PARTY IMPORT
import { Controller } from 'react-hook-form';
import DatePicker from './DatePicker';

interface ControlledDatePickerProps {
  control: any;
  name: any;
  [key: string]: any;
}

const ControlledDatePicker = (props: ControlledDatePickerProps) => {
  const { control, name, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, onChange, ...restt } }) => {
        return (
          <DatePicker
            {...restt}
            onChange={(e: any, date: any) => {
              onChange?.(date);
            }}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledDatePicker;
