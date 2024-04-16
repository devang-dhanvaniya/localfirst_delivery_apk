import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetOrdersMutation} from './orderApi';
import {Filter, ResToast, initialFilter, initialResToast} from '../common';
import {prepareResponse, wp} from '../../commonFunctions';
import {commonStyles, textStyles} from '../../styles';
import {List, Tabs, Toast} from '../../ui';
import {useOrderItems} from './orderSlice';
import {Colors, Navigator} from '../../constant';
import {orderStatusOtions} from './mock';
import {useIsFocused} from '@react-navigation/native';
import {Card} from 'react-native-paper';

const ALL = 'All';
const VALUE = 'value';
const LABEL = 'label';

const initialLocalFilter = {
  ...initialFilter,
  status: ALL,
};

const Order = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const orderItems = useOrderItems();
  const [getOrders, {isLoading}] = useGetOrdersMutation();
  const [filter, setFilter] = useState<Filter>(initialLocalFilter);
  const [resToast, setResToast] = useState<ResToast>(initialResToast);
  // console.log(orderItems, 'orderItemsorderItemsorderItems');

  const onGet = async () => {
    try {
      const payload = {
        ...filter,
        status: filter?.status,
      };
      console.log(payload, 'payloadpayloadpayload');

      const res = await getOrders(payload).unwrap();
      console.log(res, 'ressssssssssssssss');
    } catch (err: any) {
      console.error('Err ', err);
      setResToast(prepareResponse(err?.data));
    }
  };

  const prepareTabsOptions = () => {
    return [{[VALUE]: ALL, [LABEL]: ALL}, ...orderStatusOtions];
  };

  const OrderBox = (item: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(Navigator.ORDER_DETAILS, {
            id: item?.id,
          });
        }}>
        <View style={[commonStyles.flexBetweenCenter, commonStyles.whiteCard]}>
          <View
            style={[
              commonStyles.flexBetweenCenter,
              commonStyles.container,
              {gap: 5},
            ]}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 40, width: 40}}
              />
            </View>
            <View>
              <Text style={textStyles.dark14600}>{item?.ord_id}</Text>
              <Text style={textStyles.gray14400}>{item?.updated_at_ist}</Text>
            </View>
          </View>
          <View style={[styles.spaceBox, commonStyles.container]}>
            {item?.payment_type ? (
              <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
                <Text
                  style={[
                    item?.payment_type === 'COD'
                      ? styles.badge_cod
                      : styles.badge_ofd,
                  ]}></Text>
                <Text
                  style={[
                    item?.payment_type === 'COD'
                      ? textStyles.theme14700
                      : textStyles.green14700,
                  ]}>
                  {item?.payment_type}
                </Text>
              </View>
            ) : null}
            <Pressable>
              <View
                style={[styles.activeStatus, commonStyles.flexBetweenCenter]}>
                <Text
                  style={[
                    styles.bg_status,
                    {
                      color:
                        item?.status === 'failed'
                          ? '#D34747'
                          : item?.status === 'cancel'
                          ? '#BA12C9'
                          : item?.status === 'out of delivery'
                          ? '#BA12C9'
                          : item?.status === 'delivered'
                          ? '#BA12C9'
                          : item?.status === 'assign to delivered'
                          ? '#BA12C9'
                          : '#BA12C9',
                      backgroundColor:
                        item?.status === 'failed'
                          ? '#D2B0B0'
                          : item?.status === 'cancel'
                          ? '#DEB1E2'
                          : item?.status === 'out of delivery'
                          ? '#DEB1E2'
                          : item?.status === 'delivered'
                          ? '#DEB1E2'
                          : item?.status === 'assign to delivered'
                          ? '#DEB1E2'
                          : '#DEB1E2',
                    },
                  ]}>
                  {item?.status}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  };

  useEffect(() => {
    onGet();
  }, [filter, isFocused]);

  return (
    <SafeAreaView style={[commonStyles.container, styles.container]}>
      <View
        style={{
          paddingHorizontal: 10,
          gap: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            width: wp(100),
            backgroundColor: 'transparent',
          }}>
          <Tabs
            currentTab={filter?.status}
            options={prepareTabsOptions()}
            onChange={status => {
              setFilter({
                ...initialFilter,
                status,
              });
            }}
          />
        </View>
        <List
          isLoading={isLoading}
          data={orderItems?.[filter?.status] || []}
          renderItem={({item, index}) => <OrderBox {...item} index={index} />}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          filter={filter}
          setFilter={setFilter}
          initialFilter={initialLocalFilter}
          onEndReachedThreshold={0.5}
        />
        <Toast resToast={resToast} setResToast={setResToast} />
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  pageMain: {
    paddingHorizontal: 15,
  },
  container: {
    gap: 10,
  },
  addButton: {
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  orderBox: {
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    marginBottom: 10,
  },
  twoPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addRemove: {
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  orderBottomSction: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },

  //   Dash
  badge_cod: {
    height: 6,
    width: 6,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
  badge_ofd: {
    height: 6,
    width: 6,
    backgroundColor: Colors.GREEN,
    borderRadius: 50,
  },
  spaceBox: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4,
  },
  pending: {
    backgroundColor: '#C5D9FF',
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: '#387CFD',
    borderRadius: 2,
  },
  success: {
    backgroundColor: '#B0D2B1',
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: '#3C983E',
    borderRadius: 2,
  },
  bg_status: {
    padding: 5,
    width: 80,
    textAlign: 'center',
    borderRadius: 8,
  },
  activeStatus: {
    borderRadius: 8,
  },
});
