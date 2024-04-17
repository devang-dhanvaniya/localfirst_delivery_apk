import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles, textStyles} from '../../styles';
import {Colors, Navigator} from '../../constant';
import {Button, Icon, List, UIImage} from '../../ui';
import {prepareResponse, seperator, wp} from '../../commonFunctions';
import {dashboardSummaryInitialItems} from './mock';
import {
  useDashboardItems,
  useGetDeliveryDetails,
  useOrderItems,
} from '../order/orderSlice';
import {
  useGetDashboardQuery,
  useGetDeliveryPersonDetailsQuery,
  useGetOrdersMutation,
} from '../order/orderApi';
import {useAuth} from '../../hooks';
import {useIsFocused} from '@react-navigation/native';
import {Filter, initialFilter} from '../common';
import FastImage from 'react-native-fast-image';
import {LinearGradient} from 'react-native-svg';

const initialLocalFilter = {
  ...initialFilter,
  status: 'out of delivery',
};

const Dashboard = ({navigation}: any) => {
  const items = useDashboardItems();
  const [filter, setFilter] = useState<Filter>(initialLocalFilter);
  useGetDeliveryPersonDetailsQuery();
  const deliveryDetails = useGetDeliveryDetails();
  const [getOrders, {isLoading}] = useGetOrdersMutation();
  const orderItems = useOrderItems();
  const isFocused = useIsFocused();

  const {setResToast} = useAuth();
  useGetDashboardQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const onGet = async () => {
    try {
      const payload = {
        ...filter,
      };
      await getOrders(payload).unwrap();
    } catch (err: any) {
      console.error('Err ', err);
      setResToast(prepareResponse(err?.data));
    }
  };

  useEffect(() => {
    onGet();
  }, [isFocused]);

  const Item = (item: any, index: any) => {
    return (
      <View style={styles.summaryMainBox}>
        <View style={[styles.summaryBox, {backgroundColor: item.background}]}>
          <View>
            <Icon name={item.image} />
          </View>
          <View>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.value}>
              {seperator(+[items?.[item?.keys]], item?.isRupee)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const ActiveOrdersBox = (item: any) => {
    console.log(item, 'itemitemitemitemitemitem');

    const addressUser = [
      item?.shipping_address?.address1 || '',
      item?.shipping_address?.landmark || '',
      item?.shipping_address?.city || '',
      item?.shipping_address?.pincode || '',
    ]
      .filter(Boolean)
      .join(', ');

    return (
      <>
        <Pressable
          style={{marginHorizontal: 10}}
          onPress={() => {
            navigation.navigate(Navigator.ORDER_DETAILS, {
              id: item?.id,
            });
          }}>
          <View style={commonStyles.whiteCard}>
            <View style={commonStyles.flexBetweenCenter}>
              <Text style={textStyles.dark16600}>{item?.ord_id}</Text>
              <View style={[commonStyles.flexBetweenCenter, {gap: 3}]}>
                {/* <Text
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
            </Text> */}
              </View>
            </View>
            <View style={[{gap: 5, paddingVertical: 8}]}>
              <View style={[commonStyles.flexAlignStart, {gap: 5}]}>
                <Icon name="UserIcon" stroke={Colors.GRAY} size={20} />
                <Text style={textStyles.gray14500}>
                  {item?.shipping_address?.name} {item?.shipping_address?.lname}
                </Text>
              </View>
              {item?.shipping_address?.mob_no ? (
                <View style={[commonStyles.flexAlignStart, {gap: 5}]}>
                  <Icon name="CallIcon" stroke={Colors.GRAY} size={20} />
                  <Text style={textStyles.gray14500}>
                    {item?.shipping_address?.mob_no}
                  </Text>
                </View>
              ) : null}
              <View style={[commonStyles.flexAlignStart, {gap: 5}]}>
                <Icon name="LocationIcon" stroke={Colors.GRAY} size={20} />
                <Text style={[commonStyles.container, textStyles.gray14500]}>
                  {addressUser}
                </Text>
              </View>
            </View>

            <Button
              text="Order Details"
              onPress={() => {
                navigation.navigate(Navigator.ORDER_DETAILS, {
                  id: item?.id,
                });
              }}
            />
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainbox}>
      <ScrollView>
        {deliveryDetails?.first_name || deliveryDetails?.last_name ? (
          <View
            style={[
              commonStyles.whiteCard,
              commonStyles.flexAlignCenter,
              {marginHorizontal: 10},
            ]}>
            <FastImage
              source={require('../../assets/images/Profile.png')}
              style={{width: 40, height: 40, borderRadius: 15, marginRight: 10}}
            />
            <View>
              <Text
                style={{color: Colors.BLACK, fontSize: 20, fontWeight: '700'}}>
                Hello, {deliveryDetails?.first_name}{' '}
                {deliveryDetails?.last_name} 👋
              </Text>
              <Text style={textStyles.gray12500}>
                {deliveryDetails?.email_id}
              </Text>
            </View>
          </View>
        ) : null}

        <View style={styles.mergeCard}>
          <ImageBackground
            style={styles.background}
            source={require('../../assets/images/atmbg.png')}>
            <View style={styles.aboveCard}>
              <View style={commonStyles.flexBetweenCenter}>
                <UIImage name="EmptyWalletImage" />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: Colors.WHITE,
                  }}>
                  Total Balance
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={[commonStyles.flexBetweenCenter, styles.bottomCard]}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.WHITE,
              }}>
              ₹ {items?.shipping_charge}
            </Text>
            <UIImage name="MasterCardImage" />
          </View>
        </View>
        <List
          data={dashboardSummaryInitialItems}
          renderItem={({item, index}) => <Item {...item} index={index} />}
          numColumns={2}
          refreshControl={undefined}
          style={{gap: 2}}
          scrollEnabled={false}
          columnWrapperStyle={commonStyles.flatList}
        />
        <View>
          {orderItems?.['out of delivery']?.length ? (
            <View>
              <View
                style={[
                  commonStyles.flexBetweenCenter,
                  {marginBottom: 10, marginHorizontal: 10},
                ]}>
                <Text style={textStyles.gray16400}>Active Orders</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate(Navigator.ORDER);
                  }}>
                  <Text style={textStyles.theme14500}>See all</Text>
                </Pressable>
              </View>
              <List
                isLoading={isLoading}
                data={orderItems?.['out of delivery'] || []}
                renderItem={({item, index}) => (
                  <ActiveOrdersBox {...item} index={index} />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#F7F8FC',
  },

  // SummrayCard
  summaryMainBox: {
    width: wp(46),
    paddingVertical: 6,
  },
  summaryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
  heading: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.SECONDARY,
    paddingBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#232323',
  },

  // Chartsec
  cardHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.BLACK,
    paddingTop: 20,
    paddingBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  saleTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  saleText: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.SECONDARY,
  },
  salePer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#65B348',
  },

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
  mergeCard: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  aboveCard: {
    // backgroundColor: '#ff9f1c',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 60,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomCard: {
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#2EC4B6',
  },
  background: {
    width: '100%',
    resizeMode: 'cover',
  },
});
