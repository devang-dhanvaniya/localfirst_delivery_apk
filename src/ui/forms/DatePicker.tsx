import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Platform,
  Pressable,
} from 'react-native';

// UI IMPORT
import {Input} from '../../ui';

// PROJECT IMPROT
import {Colors} from '../../constant';
import {dateFormatter, wp} from '../../commonFunctions';

// THIRD - PARTY IMPORT
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from 'react-native-paper';

const DatePicker = (props: any) => {
  const {
    onRequestClose,
    mode = 'date',
    minimumDate = null,
    maximumDate = null,
    label,
    labelStyle,
    placeholder,
    value,
    onChange,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
    onRequestClose?.();
  };

  if (Platform.OS === 'android') {
    return (
      <>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}>
          <Input
            name="date"
            label={label}
            placeholder={placeholder}
            value={dateFormatter(value)}
            onPressIn={() => {
              setVisible(true);
            }}
          />
        </Pressable>

        {visible ? (
          <DateTimePicker
            testID="dateTimePicker"
            mode={mode}
            is24Hour={true}
            display="default"
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            value={value ? new Date(value) : new Date()}
            {...rest}
            onChange={(e, date) => {
              onChange?.(e, date);
              setVisible(false);
            }}
          />
        ) : null}
      </>
    );
  } else if (Platform.OS === 'ios') {
    return (
      <>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}>
          <Input
            name="date"
            label={label}
            placeholder={placeholder}
            editable={false}
            value={dateFormatter(value)}
            onPressIn={() => {
              setVisible(true);
            }}
          />
        </Pressable>
        {visible ? (
          <>
            <Modal
              animationType={Platform.OS === 'ios' ? 'slide' : 'fade'}
              transparent={true}
              visible={visible}
              onRequestClose={onClose}
              onDismiss={onClose}>
              <SafeAreaView style={styles.container}>
                <View style={styles.view1}>
                  <View style={styles.view2}>
                    <Button
                      mode="text"
                      labelStyle={{textTransform: 'none', color: Colors.RED}}
                      onPress={onClose}>
                      Close
                    </Button>
                  </View>
                  <RNDateTimePicker
                    testID="dateTimePicker"
                    mode={mode}
                    is24Hour={true}
                    display="spinner"
                    style={styles.datePicker}
                    maximumDate={maximumDate}
                    minimumDate={minimumDate}
                    textColor={Colors.RED}
                    value={value ? new Date(value) : new Date()}
                    onChange={onChange}
                    {...rest}
                    //timeZoneOffsetInSeconds={18000}
                  />
                </View>
              </SafeAreaView>
            </Modal>
          </>
        ) : null}
      </>
    );
  }
  return null;
};

export default DatePicker;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  view1: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
  },
  view2: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
  },
  datePicker: {
    width: wp(100),
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
