import {TouchableOpacity, StyleSheet, View, Pressable} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';

// UI IMPORT
import {Text} from '../typography';

// PROJET IMPORT
import {textStyles, commonStyles} from '../../styles';
import {Colors, Common} from '../../constant';
import {DropdownVatiants} from './Dropdown';
import {OptionTypes} from '../../features/common';

// THIRD - PARTY IMPORT
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import CheckBox from './CheckBox';

export interface DropdownModalProps
  extends Omit<BottomSheetModalProps, 'children'> {
  options: OptionTypes[];
  valueKey?: string;
  labelKey?: string;
  label?: string;
  value?: any;
  variant?: DropdownVatiants;
  refe?: any;
  onVisible?: (e?: any) => void;
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
    onVisible,
    onChangeText,
    ...rest
  } = props;

  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const isMulti = variant === 'MultiSelect';

  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  const onHide = () => {
    setSelectedValues([]);
    refe.current?.close();
  };

  useEffect(() => {
    if (isMulti) {
      setSelectedValues(value || []);
    }
  }, [value]);

  return (
    <BottomSheetModal
      backdropComponent={props => (
        <BottomSheetBackdrop {...props} pressBehavior={'close'} />
      )}
      ref={refe}
      index={1}
      snapPoints={snapPoints}
      {...rest}>
      <View style={commonStyles.container}>
        {isMulti ? (
          <View style={styles.header}>
            <Pressable onPress={onHide}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable>
              <Text>{label}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                onChangeText?.(selectedValues || []);
                onHide();
              }}>
              <Text>Done</Text>
            </Pressable>
          </View>
        ) : null}
        <BottomSheetFlatList
          data={options}
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
                      onHide();
                    }}>
                    <Text style={textStyles.dark14600}>{item?.[labelKey]}</Text>
                  </TouchableOpacity>
                )}
              </>
            );
          }}
        />
      </View>
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
