import {FlatList, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {OptionTypes} from '../../features/common';
import {Colors, Common} from '../../constant';
import {textStyles} from '../../styles';
import {wp} from '../../commonFunctions';

interface TabsProps {
  currentTab?: any;
  onChange?: (value?: any) => void;
  options: OptionTypes[];
  valueKey?: string;
  labelKey?: string;
  style?: any;
}

const Tabs = (props: TabsProps) => {
  const {
    style,
    currentTab,
    options,
    valueKey = Common.TABS_VALUE_KEY,
    labelKey = Common.TABS_LABEL_KEY,
    onChange,
  } = props;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={options}
      style={style}
      renderItem={({item}) => {
        return (
          <>
            <Pressable
              style={[
                styles.tab,
                {
                  borderColor:
                    item?.[valueKey] === currentTab
                      ? Colors.PRIMARY
                      : Colors.GRAY,
                },
              ]}
              onPress={() => onChange?.(item?.[valueKey])}>
              <Text
                style={[
                  styles.tabText,
                  item?.[valueKey] === currentTab
                    ? textStyles.theme14500
                    : textStyles.gray14500,
                ]}>
                {item?.[labelKey]}
              </Text>
            </Pressable>
          </>
        );
      }}
    />
  );
};

export default Tabs;
const styles = StyleSheet.create({
  tab: {
    borderBottomWidth: 2,
    paddingVertical: 6,
    width: wp(25),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    marginHorizontal: 5,
    marginBottom: 5,
  },
});
