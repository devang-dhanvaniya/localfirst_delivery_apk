import {
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';

// UI IMPORT
import {Text} from '../typography';

// PROJET IMPORT
import {textStyles, commonStyles} from '../../styles';
import {Colors, Common} from '../../constant';
import {DropdownVatiants} from './Dropdown';
import CheckBox from './CheckBox';

// THIRD - PARTY IMPORT
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useForm} from 'react-hook-form';
import ControlledInput from './ControlledInput';
import {OptionTypes} from '../../features/common';

export interface DropdownModalProps
  extends Omit<BottomSheetModalProps, 'children'> {
  options: OptionTypes[];
  valueKey?: string;
  labelKey?: string;
  label?: string;
  value?: any;
  variant?: DropdownVatiants;
  refe?: any;
  isSearch?: boolean;
  onVisible?: (e?: any) => void;
  onHide?: (value?: any) => void;
  onChangeText?: (value: any, e?: any) => void;
}
const DropdownModal = (props: DropdownModalProps) => {
  const {
    style = {},
    value,
    variant = 'Normal',
    label,
    options = [],
    refe,
    valueKey = Common.OPTION_VALUE_KEY,
    labelKey = Common.OPTION_LABEL_KEY,
    isSearch,
    onVisible,
    onHide,
    onChangeText,
    ...rest
  } = props;

  const snapPoints = useMemo(() => ['60%', '60%'], []);
  const isMulti = variant === 'MultiSelect';

  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  const {control, watch, reset} = useForm({});

  const onLocalHide = () => {
    setSelectedValues([]);
    reset();
    refe.current?.close();
  };

  const prepoareOptions = () => {
    const search = watch('search');
    return (
      options?.filter(item =>
        search
          ? item?.[labelKey]
              ?.toLowerCase()
              ?.includes(watch('search')?.toLowerCase())
          : true,
      ) || []
    );
  };

  useEffect(() => {
    if (isMulti) {
      setSelectedValues(value || []);
    }
  }, [value]);

  return (
    <BottomSheetModal
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior={'close'}
          onPress={() => {
            reset();
            onHide?.(value);
          }}
        />
      )}
      ref={refe}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      {...rest}>
      <SafeAreaView style={commonStyles.container}>
       {isSearch ?  <ControlledInput
          style={{
            marginHorizontal: 10,
          }}
          name="search"
          placeholder="Search"
          control={control}
        /> : null}
        {isMulti ? (
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                onLocalHide();
                onHide?.(value);
              }}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable>
              <Text>{label}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                onChangeText?.(selectedValues || []);
                onLocalHide();
              }}>
              <Text>Done</Text>
            </Pressable>
          </View>
        ) : null}
        <BottomSheetFlatList
          data={prepoareOptions()}
          keyboardShouldPersistTaps="never"
          keyExtractor={(_, i) => i?.toString()}
          renderItem={({item}) => {
            return (
              <>
                {isMulti ? (
                  <BottomSheetView style={styles.mainText}>
                    <CheckBox
                      tintColor={Colors.PRIMARY}
                      tintColors={{true: Colors.PRIMARY, false: Colors.PRIMARY}}
                      lineWidth={1}
                      value={selectedValues?.includes(item?.[valueKey])}
                      onValueChange={e => {
                        if (e) {
                          setSelectedValues?.(selectedValues => [
                            ...selectedValues,
                            item?.[valueKey],
                          ]);
                        } else {
                          setSelectedValues?.(selectedValues =>
                            selectedValues?.filter(
                              (i: any) => i !== item?.[valueKey],
                            ),
                          );
                        }
                      }}
                    />
                    <Text style={textStyles.dark14600}>{item?.[labelKey]}</Text>
                  </BottomSheetView>
                ) : (
                  <TouchableOpacity
                    style={styles.mainText}
                    onPress={() => {
                      onChangeText?.(item?.[valueKey], item);
                      onLocalHide();
                    }}>
                    <Text style={textStyles.dark14600}>{item?.[labelKey]}</Text>
                  </TouchableOpacity>
                )}
              </>
            );
          }}
        />
      </SafeAreaView>
    </BottomSheetModal>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  mainText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    color: Colors.SECONDARY,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
