// commonStyles.js
import {Platform, StyleSheet} from 'react-native';

// THIRD - PARTY IMPORT
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const commonStyles = StyleSheet.create({
  whiteCard: {
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 30,
      },
      android: {
        shadowOffset: {width: 0, height: 5},
        elevation: 2,
      },
    }),
  },
  container: {
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
  },
  flexAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexAlignEnd: {
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  flexJustifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexJustifyEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexAlignStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    
  },
  flatList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: wp(100),
    paddingVertical: 5,
  },
  flexBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
