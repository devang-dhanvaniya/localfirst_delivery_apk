import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

// UI IMPORT
import {List, Text} from '../../ui';

// PROJECT IMPORT
import {Colors} from '../../constant';
import {useGetDashboardQuery} from './dashboardApi';
import {useDashboardSummary} from './dashboardSlice';
import { wp } from '../../commonFunctions';
import {dashboardSummaryInitialItems} from './mock';

const Dashboard = () => {

  useGetDashboardQuery(undefined, {refetchOnMountOrArgChange: true});
  const items = useDashboardSummary();

  const Item = (item: any) => {
    return (
      <View style={styles.summaryMainBox}>
        <View style={styles.summaryBox}>
          <View>
            <Image source={item.image} />
          </View>
          <View>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.value}>{[items?.[item?.key]]}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.mainbox}>
         
          <View>
            <List
              data={dashboardSummaryInitialItems}
              renderItem={({item,index}) => <Item {...item} index={index} />}
              numColumns={2}
              refreshControl={undefined}
              style={{gap: 2}}
            />

            {/* <View>
              <Text style={styles.cardHeading}>Sales Comparasions</Text>
              <View style={styles.card}>
                <View style={styles.saleTextBox}>
                  <Text style={styles.salePer}> +10.2%</Text>
                  <Text style={styles.saleText}>vs Previous Monday</Text>
                </View>
                <Image source={require('../../assets/images/Logo.png')} />
              </View>
            </View>
            <View>
              <Text style={styles.cardHeading}>Weekly Activity</Text>
              <View style={styles.card}>
                <View style={styles.saleTextBox}>
                  <Text style={styles.salePer}> +10.2%</Text>
                  <Text style={styles.saleText}>vs Previous Monday</Text>
                </View>
                <Image source={require('../../assets/images/Logo.png')} />
              </View>
            </View> */}
          </View>
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
    paddingHorizontal: 20,
    backgroundColor: '#F7F8FC',
  },

  // SummrayCard
  summaryMainBox: {
    padding: 5,
  },
  summaryBox: {
    width: wp(43),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 17,
  },
  heading: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.SECONDRAY,
  },
  value: {
    fontSize: 16,
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
});
