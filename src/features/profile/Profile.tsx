import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useGetDeliveryDetails} from '../order/orderSlice';
import {useGetDeliveryPersonDetailsQuery} from '../order/orderApi';
import {commonStyles, textStyles} from '../../styles';
import {useAuth} from '../../hooks';
import {Button, Icon} from '../../ui';
import {Colors} from '../../constant';

const Profile = () => {
  useGetDeliveryPersonDetailsQuery();
  const deliveryDetails = useGetDeliveryDetails();
  const {clearAuth} = useAuth();

  return (
    <SafeAreaView style={[commonStyles.container, styles.container]}>
      {/* <Pressable
        onPress={() => {
          clearAuth();
        }}>
        <View style={[commonStyles.flexAlignCenter, styles.logout]}>
          <Text>Logout</Text>
          <Icon name="LogoutIcon" size={18} />
        </View>
      </Pressable> */}

      <View style={[commonStyles.flexBetweenCenter, commonStyles.whiteCard]}>
        <View
          style={[
            commonStyles.flexBetweenCenter,
            commonStyles.container,
            {gap: 20},
          ]}>
          <View>
            <Image
              source={require('../../assets/images/product.png')}
              style={styles.profileImage}
            />
          </View>
          <View
            style={[
              commonStyles.flexBetweenCenter,
              commonStyles.container,
              {gap: 5},
            ]}>
            <View>
              <Text style={textStyles.dark14600}>Jenny Wilson</Text>
              <Text style={textStyles.gray14400}>jennywilson12@email.com </Text>
              <Text style={textStyles.gray14400}>(219) 555-0114 </Text>
            </View>
          </View>
        </View>
      </View>
      <Button
        text="Logout"
        onPress={() => {
          clearAuth();
        }}
        style={styles.logoutBtn}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 15,
  },
  logout: {
    color: 'black',
    gap: 4,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderColor: Colors.GREEN,
    borderWidth: 2,
    borderRadius: 24,
  },
  logoutBtn: {
    paddingHorizontal: 6,
    paddingVertical: 15,
    gap: 10,
  },
});
