import {PermissionsAndroid, Platform} from 'react-native';

export const requestStoragePermission = async () => {
  try {
    if(Platform.OS !== 'android'){
      return
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.error("Storage Per Err =-=>",err);
  }
};
