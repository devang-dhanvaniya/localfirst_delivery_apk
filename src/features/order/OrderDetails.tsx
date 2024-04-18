import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles, textStyles} from '../../styles';
import {Colors, Navigator} from '../../constant';
import {Button, List, Loader, UIModal} from '../../ui';
import {
  useGetOrderDetailsQuery,
  useUpdatePaymentOrderMutation,
} from './orderApi';
// import {useGetOrderDetails} from './orderSlice';
import {prepareImageUrl} from '../../commonFunctions';
import FastImage from 'react-native-fast-image';
import {RadioButton} from 'react-native-paper';
import {useAuth} from '../../hooks';

const OrderDetails = ({route, navigation}: any) => {
  const {setResToast} = useAuth();
  const orderId = route?.params?.id;

  const [modalDetails, setModalDetails] = useState<any>({});
  const [checked, setChecked] = React.useState('cash');
  const [updatePaymentOrder] = useUpdatePaymentOrderMutation();
  const {isLoading, data: orderDetails} = useGetOrderDetailsQuery(orderId);

  const addressUser = [
    orderDetails?.data?.shipping_address?.address1 || '',
    orderDetails?.data?.shipping_address?.landmark || '',
    orderDetails?.data?.shipping_address?.city || '',
    orderDetails?.data?.shipping_address?.pincode || '',
  ]
    .filter(Boolean)
    .join(', ');

  const onUpdatePaymentOrder = async () => {
    try {
      const payload = {
        payment_mode: checked,
        order_id: orderDetails?.data?.id,
      };

      const res = await updatePaymentOrder(payload).unwrap();
      if (res) {
        navigation.navigate(Navigator.OTP_VERIFICATION, {
          id: orderDetails?.data?.id,
        });
        setModalDetails({});
      }
    } catch (e: any) {}
  };

  const OrderDetailsBox = (item: any) => {
    return (
      <>
        <Pressable style={{marginBottom: 10}}>
          <View style={[commonStyles.flexBetweenCenter, styles.productCard]}>
            <View
              style={[
                commonStyles.flexBetweenCenter,
                commonStyles.container,
                {gap: 5},
              ]}>
              <View>
                <FastImage
                  style={{height: 90, width: 50, borderRadius: 8}}
                  source={{
                    uri: prepareImageUrl(item?.product?.photo?.split(',')?.[0])
                      ?.uri,
                    headers: {Authorization: 'someAuthtoken'},
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <View
                style={[
                  commonStyles.flexBetweenCenter,
                  commonStyles.container,
                  {gap: 5},
                ]}>
                <View>
                  <Text style={textStyles.dark14600}>
                    {item?.product?.title}
                  </Text>
                  <Text style={textStyles.gray14400}>
                    Price: {item?.product?.price}
                  </Text>
                </View>
                <View>
                  <Text style={textStyles.green12500}>
                    Quantity: {item?.quantity}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <SafeAreaView style={commonStyles.container}>
        <ScrollView style={[commonStyles.container]}>
          <View style={[commonStyles.container, styles.pageMain]}>
            {/* Restaurant Detail */}
            <View style={commonStyles.whiteCard}>
              <View style={styles.orderFirstsec}>
                <Text style={textStyles.dark14600}>Shop Details</Text>
              </View>
              <View style={commonStyles.flexBetweenCenter}>
                <View
                  style={[
                    styles.detailsContainer,
                    commonStyles.flexAlignStart,
                    {gap: 10},
                  ]}>
                  <View>
                    <Image
                      source={require('../../assets/images/vendorPic.png')}
                      style={{borderRadius: 50, height: 40, width: 40}}
                    />
                  </View>
                  <View style={commonStyles.container}>
                    <Text style={textStyles.dark14600}>
                      {orderDetails?.data?.store?.store_name || ''}
                    </Text>
                    <Text style={textStyles.gray14400}>
                      {orderDetails?.data?.pickup_address?.pickup_address || ''}
                    </Text>
                  </View>
                </View>
                {/* <View style={[styles.spaceBox, commonStyles.container]}>
            <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
              <Icon
                name="CallIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDARY},
                }}
              />
              <Icon
                name="ChatIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDARY},
                }}
              />
            </View>
          </View> */}
              </View>
            </View>

            {/* User Detail */}
            <View style={commonStyles.whiteCard}>
              <View style={styles.orderFirstsec}>
                <Text style={textStyles.dark14600}>User Details</Text>
              </View>
              <View style={commonStyles.flexBetweenCenter}>
                <View
                  style={[
                    styles.detailsContainer,
                    commonStyles.flexAlignStart,
                    {gap: 10},
                  ]}>
                  <View>
                    {/* <FastImage
                style={styles.promotionImg}
                source={{
                  uri: prepareImageUrl(orderDetails?.data?.store?.photo)?.uri,
                  headers: {Authorization: 'someAuthtoken'},
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              /> */}
                    <Image
                      source={require('../../assets/images/userPic.png')}
                      style={{borderRadius: 50, height: 40, width: 40}}
                    />
                  </View>
                  <View style={commonStyles.container}>
                    <Text style={textStyles.dark14600}>
                      {orderDetails?.data?.shipping_address?.name || ''}{' '}
                      {orderDetails?.data?.shipping_address?.lname || ''}
                    </Text>
                    <Text style={textStyles.gray14400}>{addressUser}</Text>
                  </View>
                </View>
                {/* <View style={[styles.spaceBox, commonStyles.container]}>
            <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
              <Icon
                name="CallIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDARY},
                }}
              />
              <Icon
                name="ChatIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDARY},
                }}
              />
            </View>
          </View> */}
              </View>
            </View>
            {/* Restaurant Detail */}
            <View style={commonStyles.whiteCard}>
              <View
                style={[styles.orderFirstsec, commonStyles.flexBetweenCenter]}>
                <Text style={textStyles.dark14600}>Item details</Text>
                <Pressable
                  onPress={() => {
                    orderDetails?.data?.status === 'Assign to delivery'
                      ? setModalDetails({
                          visible: true,
                          id: orderDetails?.data?.id,
                          index: orderDetails?.data?.index,
                        })
                      : null;
                    setResToast({
                      status: true,
                      message: 'You can just change Assign to delivery status',
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
                            orderDetails?.data?.status === 'Failed'
                              ? '#D34747'
                              : orderDetails?.data?.status === 'Cancel'
                              ? '#BA12C9'
                              : orderDetails?.data?.status === 'Out of delivery'
                              ? '#9E891A'
                              : orderDetails?.data?.status === 'Delivered'
                              ? '#F16703'
                              : orderDetails?.data?.status ===
                                'Assign to delivery'
                              ? '#8532EF'
                              : '#BA12C9',
                          backgroundColor:
                            orderDetails?.data?.status === 'Failed'
                              ? '#D2B0B0'
                              : orderDetails?.data?.status === 'Cancel'
                              ? '#DEB1E2'
                              : orderDetails?.data?.status === 'Out of delivery'
                              ? '#F9F1C8'
                              : orderDetails?.data?.status === 'Delivered'
                              ? '#FFC69C'
                              : orderDetails?.data?.status ===
                                'Assign to delivery'
                              ? '#DFC7FF'
                              : '#D2B0B0',
                          fontSize: 12,
                        },
                      ]}>
                      {orderDetails?.data?.status}
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View
                style={[
                  commonStyles.flexBetweenCenter,
                  {paddingTop: 8, marginBottom: 10},
                ]}>
                <Text style={textStyles.theme12600}>
                  Total Item: {orderDetails?.data?.order_item?.length}
                </Text>
                {orderDetails?.data?.payment_type ? (
                  <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
                    <Text
                      style={[
                        orderDetails?.data?.payment_type === 'COD'
                          ? styles.badge_cod
                          : styles.badge_ofd,
                      ]}></Text>
                    <Text
                      style={[
                        orderDetails?.data?.payment_type === 'COD'
                          ? textStyles.theme14700
                          : textStyles.green12600,
                      ]}>
                      {orderDetails?.data?.payment_type}
                    </Text>
                  </View>
                ) : null}
              </View>
              <List
                isLoading={false}
                data={orderDetails?.data?.order_item || []}
                renderItem={({item, index}) => (
                  <OrderDetailsBox {...item} index={index} />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={1}
              />
              <Text style={[textStyles.gray14400]}>
                Total bill: {orderDetails?.data?.total_payment}
              </Text>
            </View>
          </View>
        </ScrollView>
        {orderDetails?.data?.status !== 'Delivered' ? (
          <Button
            style={styles.bottomButton}
            text="Click for Confirmation >>"
            onPress={() => {
              setModalDetails({
                visible: true,
              });
            }}
          />
        ) : null}
      </SafeAreaView>
      <UIModal
        onDismiss={() => setModalDetails({})}
        visible={modalDetails?.visible}>
        <View>
          <Text
            style={[
              textStyles.dark16600,
              {textAlign: 'center', marginBottom: 20},
            ]}>
            Are You sure you want to choose '{checked}' payment
          </Text>
          <View>
            <View style={commonStyles.flexAlignCenter}>
              <RadioButton
                value="cash"
                status={checked === 'cash' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('cash')}
              />
              <Text style={textStyles.gray16500}>Cash</Text>
            </View>
            <View style={[commonStyles.flexAlignCenter]}>
              <RadioButton
                value="online"
                status={checked === 'online' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('online')}
              />
              <Text style={textStyles.gray16500}>Online</Text>
            </View>
            <Button text="Done" onPress={() => onUpdatePaymentOrder()}></Button>
          </View>
        </View>
      </UIModal>
      <Loader visible={isLoading} color={Colors.PRIMARY} />
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  pageMain: {
    padding: 10,
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
  orderFirstsec: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#EDEDED',
  },
  detailsContainer: {
    paddingVertical: 10,
  },
  itemCard: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
  },
  promotionImg: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: '100%',
    height: 100,
  },
  green: {
    color: 'green',
  },
  yellow: {
    color: 'orange',
  },
  productCard: {
    borderColor: '#f1f1f1',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
  bg_status: {
    padding: 5,
    textAlign: 'center',
    borderRadius: 8,
  },
  activeStatus: {
    borderRadius: 8,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    left: 10,
  },
});
