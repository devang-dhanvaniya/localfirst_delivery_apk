import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetOrdersMutation, useUpdateOrderStatusMutation} from './orderApi';
import {Filter, ResToast, initialFilter, initialResToast} from '../common';
import {prepareResponse, wp} from '../../commonFunctions';
import {commonStyles, textStyles} from '../../styles';
import {List, Tabs, Toast} from '../../ui';
import {useOrderItems} from './orderSlice';
import {Colors, Navigator} from '../../constant';
import {orderStatusOtions} from './mock';
import {useIsFocused} from '@react-navigation/native';
import {useAuth} from '../../hooks';
import DeleteModal from '../common/DeleteModal';

const ALL = 'All';
const VALUE = 'value';
const LABEL = 'label';

const initialLocalFilter = {
  ...initialFilter,
  status: ALL,
};

const Order = ({navigation}: any) => {
  const {resToast, setResToast} = useAuth();
  const isFocused = useIsFocused();
  const orderItems = useOrderItems();
  const [getOrders, {isLoading}] = useGetOrdersMutation();
  const [filter, setFilter] = useState<Filter>(initialLocalFilter);
  const [modalDetails, setModalDetails] = useState<any>({});
  const [updateOrderStatus, {isLoading: updateLoading}] =
    useUpdateOrderStatusMutation();

  const onStatusChange = async () => {
    try {
      const payload = {
        status: 'Out of delivery',
        order_id: modalDetails?.id,
      };
      const res = await updateOrderStatus(payload).unwrap();
      onGet();
      setModalDetails({});
    } catch (e: any) {}
  };

  const onGet = async () => {
    try {
      const payload = {
        ...filter,
        status: filter?.status,
      };
      const res = await getOrders(payload).unwrap();
    } catch (err: any) {
      console.error('Err ', err);
      setResToast(prepareResponse(err?.data));
    }
  };

  const prepareTabsOptions = () => {
    return [{[VALUE]: ALL, [LABEL]: ALL}, ...orderStatusOtions];
  };

  const OrderBox = (item: any) => {
    const shippingAddressUser = [
      item?.shipping_address?.address1 || '',
      item?.shipping_address?.landmark || '',
      item?.shipping_address?.city || '',
      item?.shipping_address?.pincode || '',
    ]
      .filter(Boolean)
      .join(', ');

    return (
      <Pressable
        onPress={() => {
          navigation.navigate(Navigator.ORDER_DETAILS, {
            id: item?.id,
          });
        }}>
        <View style={[commonStyles.whiteCard]}>
          <View style={[commonStyles.flexBetweenCenter]}>
            <View
              style={[
                commonStyles.flexAlignCenter,
                commonStyles.container,
                {gap: 5},
              ]}>
              {/* <View>
                <Image
                  source={require('../../assets/images/product.png')}
                  style={{borderRadius: 50, height: 40, width: 40}}
                />
              </View> */}
              {/* <View>
                <UIFastImage
                  style={{height: 90, width: 50, borderRadius: 8}}
                  source={{
                    uri: prepareImageUrl(item?.product?.photo?.split(',')?.[0])
                      ?.uri,
                    headers: {Authorization: 'someAuthtoken'},
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View> */}
              <View style={{flex: 1}}>
                <View style={[commonStyles.flexBetweenCenter]}>
                  <Text style={textStyles.dark14600}>{item?.ord_id}</Text>
                  <View style={[commonStyles.flexBetweenCenter]}>
                    {item?.payment_type ? (
                      <View
                        style={[
                          commonStyles.flexAlignCenter,
                          {gap: 3, marginRight: 10},
                        ]}>
                        <Text
                          style={[
                            item?.payment_type === 'COD'
                              ? styles.badge_cod
                              : styles.badge_ofd,
                          ]}></Text>
                        <Pressable onPress={() => {}}>
                          <Text
                            style={[
                              item?.payment_type === 'COD'
                                ? textStyles.theme14700
                                : textStyles.green14700,
                            ]}>
                            {item?.payment_type}
                          </Text>
                        </Pressable>
                      </View>
                    ) : null}
                    <Pressable
                      onPress={() => {
                        item?.status === 'Assign to delivery'
                          ? setModalDetails({
                              visible: true,
                              id: item?.id,
                              index: item?.index,
                            })
                          : null;
                        setResToast({
                          status: true,
                          message:
                            'You can just change Assign to delivery status',
                          isToast: true,
                        });
                      }}>
                      <View
                        style={[
                          styles.activeStatus,
                          commonStyles.flexBetweenCenter,
                        ]}>
                        <Text
                          style={[
                            styles.bg_status,
                            {
                              color:
                                item?.status === 'Failed'
                                  ? '#D34747'
                                  : item?.status === 'Cancel'
                                  ? '#BA12C9'
                                  : item?.status === 'Out of delivery'
                                  ? '#9E891A'
                                  : item?.status === 'Delivered'
                                  ? '#F16703'
                                  : item?.status === 'Assign to delivery'
                                  ? '#8532EF'
                                  : '#BA12C9',
                              backgroundColor:
                                item?.status === 'Failed'
                                  ? '#D2B0B0'
                                  : item?.status === 'Cancel'
                                  ? '#DEB1E2'
                                  : item?.status === 'Out of delivery'
                                  ? '#F9F1C8'
                                  : item?.status === 'Delivered'
                                  ? '#FFC69C'
                                  : item?.status === 'Assign to delivery'
                                  ? '#DFC7FF'
                                  : '#D2B0B0',
                              fontSize: 12,
                            },
                          ]}>
                          {item?.status}
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
                <Text style={[textStyles.gray14400, {marginBottom: 10}]}>
                  {item?.updated_at_ist}
                </Text>

                <View>
                  <Text style={[textStyles.dark14500]}>Pickup</Text>
                  <Text style={[commonStyles.container, textStyles.gray14500]}>
                    {shippingAddressUser}
                  </Text>
                </View>
                {shippingAddressUser?.length ? (
                  <View style={{marginTop: 10}}>
                    <Text style={[textStyles.dark14500]}>Delivery</Text>
                    <Text
                      style={[commonStyles.container, textStyles.gray14500]}>
                      {shippingAddressUser}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  useEffect(() => {
    onGet();
  }, [filter, isFocused]);

  return (
    <>
      <SafeAreaView style={[commonStyles.container, styles.container]}>
        <ScrollView>
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
              renderItem={({item, index}) => (
                <OrderBox {...item} index={index} />
              )}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              filter={filter}
              setFilter={setFilter}
              initialFilter={initialLocalFilter}
              onEndReachedThreshold={0.5}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <DeleteModal
        visible={!!modalDetails?.visible}
        title="Status Conformation"
        doneText="Yes"
        cancelText="No"
        text="Are you sure you go for 'out of delivery' ?"
        onDonePress={() => {
          onStatusChange();
        }}
        onDismiss={() => {
          setModalDetails({});
        }}
      />
    </>
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
    textAlign: 'center',
    borderRadius: 8,
  },
  activeStatus: {
    borderRadius: 8,
  },
});
