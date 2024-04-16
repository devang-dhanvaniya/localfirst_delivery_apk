import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles, textStyles} from '../../styles';
import {Colors, Navigator} from '../../constant';
import {Button, Icon, List, UIImage} from '../../ui';
import {prepareResponse, seperator, wp} from '../../commonFunctions';
import {dashboardSummaryInitialItems} from './mock';
import {useDashboardItems, useOrderItems} from '../order/orderSlice';
import {useGetDashboardQuery, useGetOrdersMutation} from '../order/orderApi';
import {useAuth} from '../../hooks';
import {useIsFocused} from '@react-navigation/native';
import {Filter, initialFilter} from '../common';
import FastImage from 'react-native-fast-image';

const initialLocalFilter = {
  ...initialFilter,
  status: 'out of delivery',
};

const Dashboard = ({navigation}: any) => {
  const items = useDashboardItems();
  const [filter, setFilter] = useState<Filter>(initialLocalFilter);

  console.log(items, 'itemsitemsitemsitems');
  const [getOrders, {isLoading}] = useGetOrdersMutation();
  const orderItems = useOrderItems();
  console.log(orderItems, 'orderItemsorderItems');
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
      console.log(payload, 'payloadpayloadpayload');

      const res = await getOrders(payload).unwrap();
      console.log(res, 'ressssssssssssssss');
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
            <View
              style={[
                commonStyles.flexAlignCenter,
                {gap: 5, paddingVertical: 8},
              ]}>
              {/* <Icon name="DashboardIcon" /> */}
              {/* <Text style={textStyles.green14500}>Restaurant Location</Text> */}
            </View>
            <View style={[commonStyles.flexAlignStart, {gap: 5}]}>
              <Icon name="LocationIcon" size={20} />
              <Text style={[commonStyles.container, textStyles.theme14500]}>
                {addressUser}
              </Text>
            </View>
            <Button text="Order Details" />
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainbox}>
      <Pressable
        style={{marginHorizontal: 10}}
        onPress={() => {
          navigation.navigate(Navigator.ORDER);
        }}>
        <Text style={{color: 'red'}}>Order</Text>
      </Pressable>
      <View style={styles.mergeCard}>
        <View style={[commonStyles.flexBetweenCenter, styles.aboveCard]}>
          <UIImage name="EmptyWalletImage" />
          <Text style={{fontWeight: '600', fontSize: 16, color: Colors.WHITE}}>
            Total Balance
          </Text>
        </View>
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
        columnWrapperStyle={commonStyles.flatList}
      />
      {orderItems?.['out of delivery']?.length ? (
        <View>
          <View
            style={[
              commonStyles.flexBetweenCenter,
              {marginBottom: 10, marginHorizontal: 10},
            ]}>
            <Text style={textStyles.dark16600}>Active Orders</Text>
            <Text style={textStyles.theme14500}>See all</Text>
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
    color: Colors.SECONDRAY,
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
    color: Colors.SECONDRAY,
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
  },
  aboveCard: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 60,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bottomCard: {
    padding: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#2EC4B6',
  },
});
