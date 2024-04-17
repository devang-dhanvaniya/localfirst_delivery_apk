import {ScrollView, StyleSheet, View, Image} from 'react-native';
import React from 'react';

// UI IMPORT
import {Icon, List, Text} from '../../ui';

// PROJECT IMPORT
import {commonStyles, textStyles} from '../../styles';
import {Colors} from '../../constant';
import {useGetNotificationQuery} from '../order/orderApi';
import {useNotifictionList} from '../order/orderSlice';
import {prepareImageUrl, timeDateFormatter} from '../../commonFunctions';
import FastImage from 'react-native-fast-image';
import UIFastImage from '../../ui/images/UIFastImage';

const Notification = () => {
  useGetNotificationQuery(undefined, {refetchOnMountOrArgChange: true});
  const notificationList = useNotifictionList();
  console.log(notificationList, 'notificationList');

  const NotificationBox = (item: any) => {
    console.log(item, 'itemitemitemitem');

    return (
      <View style={styles.orderEditCard}>
        <View>
          <UIFastImage
            style={{borderRadius: 50, height: 60, width: 60}}
            source={prepareImageUrl(item?.image)}
          />
        </View>
        <View style={commonStyles.container}>
          <Text style={textStyles.gray14600}>
            {item?.body}
            {'\n'}
            <Text style={textStyles.blue14500}>#{item?.id}</Text>  for 
            <Text style={textStyles.dark14600}> {item?.title}</Text>
          </Text>

          <View style={styles.twoPrice}>
            <Text style={textStyles.gray12400}>
              {timeDateFormatter(item?.created_at_ist) || '-'}
            </Text>
          </View>
        </View>
        {/* <View>
          <View style={styles.addRemove}>
            <Icon name="CheckIcon" />
            <Icon name="DeleteIcon" />
          </View>
        </View> */}
      </View>
    );
  };

  return (
    <View style={styles.mainbox}>
      <List
        data={notificationList || []}
        renderItem={({item, index}) => (
          <NotificationBox {...item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <View>
          <View style={[commonStyles.flexAlignCenter, {gap: 6}]}>
            <Text style={textStyles.dark14600}>New</Text>
            <View style={styles.orderNumber}>
              <Text style={styles.count}>2</Text>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>

          <View style={[commonStyles.flexAlignCenter, {gap: 6}]}>
            <Text style={textStyles.dark14600}>Earlier</Text>
            <View style={styles.orderNumber}>
              <Text style={styles.count}>4</Text>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>
          <View style={styles.orderEditCard}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 60, width: 60}}
              />
            </View>
            <View style={commonStyles.container}>
              <Text style={textStyles.gray14600}>
                You have received an Order
                <Text style={textStyles.gray14400}>#7763</Text>  for 
                <Text style={textStyles.dark14600}> kishan product</Text>
              </Text>
              <View style={styles.twoPrice}>
                <Text style={textStyles.gray12400}>March 7, 2024 5:24 pm</Text>
              </View>
            </View>
            <View>
              <View style={styles.addRemove}>
                <Icon name="CheckIcon" />
                <Icon name="DeleteIcon" />
              </View>
            </View>
          </View>
        </View> */}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f3f5f9',
  },
  orderNumber: {
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  orderEditCard: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  twoPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addRemove: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
