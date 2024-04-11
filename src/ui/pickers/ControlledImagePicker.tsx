// PROJECT IMPORT
import ImagePicker, {ImagePickerProps} from './ImagePicker';

// THIRD - PARTY IMPORT
import {Controller} from 'react-hook-form';

interface ControlledImagePickerProps extends ImagePickerProps {
  control: any;
}

const ControlledImagePicker = (props: ControlledImagePickerProps) => {
  const {control, name, ...rest} = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {ref, onChange, ...restt}}) => {
        return (
          <ImagePicker
            {...restt}
            onChange={image => onChange?.(image)}
            {...rest}
          />
        );
      }}
    />
  );
};

export default ControlledImagePicker;
