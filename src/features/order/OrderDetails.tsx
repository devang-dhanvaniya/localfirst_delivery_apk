import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles, textStyles} from '../../styles';
import {Colors} from '../../constant';
import {Button} from '../../ui';

const OrderDetails = () => {
  return (
    <View style={[commonStyles.container, styles.pageMain]}>
      {/* Restaurant Detail */}
      <View style={commonStyles.whiteCard}>
        <View style={styles.orderFirstsec}>
          <Text style={textStyles.dark14600}>Restaurant Details</Text>
        </View>
        <View style={commonStyles.flexBetweenCenter}>
          <View
            style={[
              commonStyles.flexAlignStart,
              commonStyles.container,
              {gap: 10},
            ]}>
            <View>
              <Image
                source={require('../../assets/images/product.png')}
                style={{borderRadius: 50, height: 40, width: 40}}
              />
            </View>
            <View>
              <Text style={textStyles.dark14600}>Mc Donald’s</Text>
              <Text style={textStyles.gray14400}>
                6, the Main Road, Iblur Village, Bellandur, Bengaluru, Karnataka
                560103, India
              </Text>
            </View>
          </View>
          {/* <View style={[styles.spaceBox, commonStyles.container]}>
            <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
              <Icon
                name="CallIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDRAY},
                }}
              />
              <Icon
                name="ChatIcon"
                pathStyles={{
                  1: {fill: Colors.SECONDRAY},
                }}
              />
            </View>
          </View> */}
        </View>
      </View>
      {/* Restaurant Detail */}
      <View style={commonStyles.whiteCard}>
        <View style={styles.orderFirstsec}>
          <Text style={textStyles.dark14600}>Item details</Text>
        </View>
        <View style={[commonStyles.flexBetweenCenter, {paddingTop: 8}]}>
          <Text style={textStyles.theme12600}>Total Iteam: 2</Text>
          <View style={[commonStyles.flexAlignCenter, {gap: 3}]}>
            <View style={styles.badge}></View>
            <Text style={textStyles.theme14700}>COD</Text>
          </View>
        </View>
        <View style={[commonStyles.flexBetweenCenter, styles.itemCard]}>
          <View
            style={[
              commonStyles.flexAlignCenter,
              commonStyles.container,
              {gap: 10},
            ]}>
            <View>
              <Image source={require('../../assets/images/product.png')} />
            </View>
            <View>
              <Text style={textStyles.dark14600}>SAMSUNG Galaxy</Text>
              <Text style={textStyles.dark12500}>Price: $233</Text>
            </View>
          </View>
          <View>
            <Text style={textStyles.green12500}>Quantity: 2</Text>
          </View>
        </View>
        <View style={[commonStyles.flexBetweenCenter, styles.itemCard]}>
          <View
            style={[
              commonStyles.flexAlignCenter,
              commonStyles.container,
              {gap: 10},
            ]}>
            <View>
              <Image source={require('../../assets/images/product.png')} />
            </View>
            <View>
              <Text style={textStyles.dark14600}>SAMSUNG Galaxy</Text>
              <Text style={textStyles.dark12500}>Price: $233</Text>
            </View>
          </View>
          <View>
            <Text style={textStyles.green12500}>Quantity: 2</Text>
          </View>
        </View>
      </View>

      <Button style={styles.buttonBottom} text="Submit" />
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  pageMain: {
    padding: 10,
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
  orderFirstsec: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#EDEDED',
  },
  itemCard: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
  },
  buttonBottom: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    left: 10,
  },
});
