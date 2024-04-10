import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles, textStyles} from '../../styles';
import {Colors} from '../../constant';
import {Button, Icon} from '../../ui';

const Dashboard = () => {
  return (
    <View>
      {/* Dash Card */}
      <View style={commonStyles.flexBetweenCenter}>
        <Text style={textStyles.dark16600}>Active Orders</Text>
        <Text style={textStyles.theme14500}>See all</Text>
      </View>
      <View style={commonStyles.whiteCard}>
        <View style={commonStyles.flexBetweenCenter}>
          <Text style={textStyles.dark16600}>Order #232-318318-8747</Text>
          <View style={[commonStyles.flexBetweenCenter, {gap: 3}]}>
            <View style={styles.badge}></View>
            <Text style={textStyles.theme14700}>COD</Text>
          </View>
        </View>
        <View
          style={[commonStyles.flexAlignCenter, {gap: 5, paddingVertical: 8}]}>
          <Icon name="DashboardIcon" />
          <Text style={textStyles.green14500}>Restaurant Location</Text>
        </View>
        <View style={[commonStyles.flexAlignStart, {gap: 5}]}>
          <Icon name="LocationIcon" size={20} />
          <Text style={[, commonStyles.container, textStyles.theme14500]}>
            6, the Main Road, Iblur Village, Bellandur, Bengaluru, Karnataka
            560103, India
          </Text>
        </View>
        <Button text="Order Details" />
      </View>
      {/* Dash Card */}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  //   Dash
  badge: {
    height: 6,
    width: 6,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
});
