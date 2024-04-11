import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {Colors} from '../../constant';
import {Text} from '../typography';
import {Icon} from '../icons';

// THIRD - PARTY IMPORT
import {launchImageLibrary} from 'react-native-image-picker';

export interface ImagePickerProps {
  style?: any;
  buttonStyle?: any;
  label?: string;
  name: string;
  errors?: any;
  labelStyle?: any;
  messageStyle?: any;
  value?: any;
  selectionLimit?: number;
  onChange?: (image: any, e?: any) => void;
}
const ImagePicker = (props: ImagePickerProps) => {
  const {
    style = {},
    buttonStyle = {},
    labelStyle = {},
    messageStyle = {},
    label,
    name,
    errors,
    selectionLimit = 5,
    value,
    onChange,
  } = props;

  const message = errors?.[name]?.message || '';

  const onLaunch = async () => {
    const res: any = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.1,
      selectionLimit: selectionLimit - value?.length || 0,
      includeBase64: true,
    });

    if (res?.didCancel) {
    } else if (res?.errorMessage) {
      console.error('Err =-=>', res?.errorMessage);
    } else {
      onChange?.([...(value || []), ...res?.assets], res);
    }
  };

  return (
    <View style={[styles.main, style]}>
      <View>
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      </View>
      {value?.length !== selectionLimit ? (
        <Pressable
          style={[
            styles.uploadImageBox,
            buttonStyle,
            {borderColor: message ? Colors.RED : Colors.GRAY},
          ]}
          onPress={() => {
            onLaunch();
          }}>
          <Icon name="UploadIcon" strokeWidth={0.5} />
          <Text style={[styles.uploadText, labelStyle]}>
            Upload up to {selectionLimit} Images
          </Text>
        </Pressable>
      ) : null}
      {message ? (
        <Text style={[styles.message, messageStyle]}>{message}</Text>
      ) : null}
      <View style={styles.imageSection}>
        {Array.from({length: selectionLimit})?.map((_, index: number) => {
          return (
            <>
              <View key={index} style={styles.imageBox}>
                {value?.[index]?.uri ? (
                  <>
                    <Pressable style={styles.close}>
                      <Icon
                        name="CloseIcon"
                        fill={Colors.BLACK}
                        stroke={Colors.WHITE}
                        onPress={() => {
                          onChange?.(
                            value?.filter((_: any, i: number) => i !== index),
                          );
                        }}
                      />
                    </Pressable>
                    <Image
                      source={{uri: value?.[index]?.uri}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="cover"
                    />
                  </>
                ) : (
                  <Pressable style={styles.center}>
                    <Icon name="UploadIcon" strokeWidth={0.5} />
                  </Pressable>
                )}
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  main: {
    paddingBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  message: {
    color: Colors.RED,
  },
  uploadImageBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 18,
    textAlign: 'center',
    borderStyle: 'dashed',
    marginBottom: 5,
  },
  uploadText: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.SECONDRAY,
  },
  imageBox: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 60,
    height: 60,
    textAlign: 'center',
    borderStyle: 'dashed',
  },
  imageSection: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
