import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useGetOrdersMutation, useUpdateOrderStatusMutation} from './orderApi';
import {Filter, ResToast, initialFilter, initialResToast} from '../common';
import {useAuth} from '../../hooks';
import {prepareResponse, seperator} from '../../commonFunctions';
import {commonStyles, textStyles} from '../../styles';
import {Button, DropdownModal, Icon, List, Tabs, Toast} from '../../ui';
import {setOrders, useOrderItems} from './orderSlice';
import {Colors, Navigator} from '../../constant';
import {orderStatusOtions} from './mock';
import {useAppDispatch} from '../../redux/hooks';
import {useIsFocused} from '@react-navigation/native';
import {AnimatedFAB} from 'react-native-paper';
import {PlusImage} from '../../ui/images/images';

const ALL = 'All';
const VALUE = 'value';
const LABEL = 'label';

const initialLocalFilter = {
  ...initialFilter,
  status: ALL,
};

const Order = ({navigation}: any) => {
  const {clearAuth} = useAuth();

  const ref = useRef<any>();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const orderItems = useOrderItems();
  const [getOrders, {isLoading}] = useGetOrdersMutation();
  const [filter, setFilter] = useState<Filter>(initialLocalFilter);
  const [resToast, setResToast] = useState<ResToast>(initialResToast);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [modalDeatils, setModalDetails] = useState<any>({});

  const onGet = async () => {
    try {
      const payload = {
        ...filter,
        status: filter?.status,
      };

      const rr = await getOrders(payload).unwrap();
    } catch (err: any) {
      console.error('Err ', err);
      setResToast(prepareResponse(err?.data));
    }
  };

  const onUpdateStatus = async (status: string) => {
    try {
      const payload = {
        order_id: modalDeatils?.id,
        status: status,
      };
      const res = await updateOrderStatus(payload).unwrap();
      const localItems = {...orderItems};

      const oldTabItems = [...(localItems?.[filter?.status] || [])];
      const newTabItems = [...(localItems?.[status] || [])];

      if (filter?.status === ALL) {
        oldTabItems[modalDeatils?.index] = {
          ...oldTabItems[modalDeatils?.index],
          status: status,
        };
      } else {
        oldTabItems.splice(modalDeatils?.index, 1);

        const newCurrentItem =
          localItems?.[filter?.status]?.[modalDeatils?.index];
        newCurrentItem['status'] = status;
        newTabItems.push(newCurrentItem);
      }

      localItems[filter?.status] = oldTabItems;
      localItems[status] = newTabItems;

      dispatch(setOrders(localItems));
      setResToast(prepareResponse(res));
      setModalDetails({});
      ref.current.close();
    } catch (err: any) {
      setResToast(prepareResponse(err?.data));
      console.error('Err =-=>', err);
    }
  };
  const prepareTabsOptions = () => {
    return [{[VALUE]: ALL, [LABEL]: ALL}, ...orderStatusOtions];
  };

  const OrderBox = (item: any) => {
    return (
      <>
        <Pressable
          onPress={() => {
            navigation.navigate(Navigator.ORDER_DETAILS, {
              id: item?.id,
            });
          }}>
          <View
            style={[commonStyles.flexBetweenCenter, commonStyles.whiteCard]}>
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
                  <View style={styles.badge}></View>
                  <Text style={textStyles.theme14700}>
                    {item?.payment_type}
                  </Text>
                </View>
              ) : null}
              <Pressable
                onPress={() => {
                  setModalDetails({
                    id: item?.id,
                    order_id: item?.ord_id,
                    index: item?.index,
                    status: item?.status,
                  });
                  ref.current.present();
                }}>
                <View style={commonStyles.flexBetweenCenter}>
                  <Text style={[textStyles.gray12600, styles.bg_initialized]}>
                    {item?.status}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </>
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
        <Tabs
          style={styles.newcss}
          currentTab={filter?.status}
          options={prepareTabsOptions()}
          onChange={status => {
            setFilter({
              ...initialFilter,
              status,
            });
          }}
        />
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

        <DropdownModal
          refe={ref}
          options={orderStatusOtions}
          onChangeText={status => {
            onUpdateStatus(status);
          }}
        />
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
  badge: {
    height: 6,
    width: 6,
    backgroundColor: Colors.PRIMARY,
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
  newcss: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
  },
  bg_initialized: {
    color: 'yellow',
    backgroundColor: 'black',
  },
  bg_success: {
    color: 'blue',
    backgroundColor: 'black',
  },
});
