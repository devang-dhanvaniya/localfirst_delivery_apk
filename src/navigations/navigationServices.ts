// THIRD - PARTY IMPORT
import {CommonActions} from '@react-navigation/native';

let navigator: any;

const setTopLevelNavigator = (navigationRef: any) => {
  navigator = navigationRef;
};

const navigate = (route: any, params?: any) => {
  navigator.dispatch(
    CommonActions.navigate(route, {
      ...params,
    }),
  );
};

const goBack = () => {
  navigator.dispatch(CommonActions.goBack());
};

export default {setTopLevelNavigator, navigate, goBack};
