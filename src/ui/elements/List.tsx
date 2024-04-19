import {
  FlatList,
  FlatListProps,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import {Filter} from '../../features';
import {hp, wp} from '../../commonFunctions';
import {Text} from '../typography';

// THIRD - PARTY IMPORT
import {ActivityIndicator} from 'react-native-paper';

export interface ListProps extends FlatListProps<any> {
  isLoading?: boolean;
  filter?: Filter;
  setFilter?: React.Dispatch<React.SetStateAction<Filter>>;
  initialFilter?: any;
  isRefresh?: boolean;
  height?: any;
  width?: any;
}
const List = (props: ListProps) => {
  const {
    isLoading,
    filter,
    setFilter,
    data,
    isRefresh,
    initialFilter,
    horizontal,
    height = hp(80),
    width = wp(100),
    ...rest
  } = props;

  const Footer = () => {
    return (
      <>
        {isLoading ? (
          <View style={styles.footer}>
            <ActivityIndicator />
          </View>
        ) : null}
      </>
    );
  };

  const EmptyComponent = () => {
    return (
      <>
        <View
          style={[
            styles.content,
            {
              height: height,
              width: width,
            },
          ]}>
          <Text>No Content</Text>
        </View>
      </>
    );
  };

  if (isLoading && (filter?.page_no === 1 || !filter)) {
    return (
      <View
        style={[
          styles.content,
          {
            height: height,
            width: width,
          },
        ]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data}
        horizontal={horizontal}
        ListFooterComponent={() => <Footer />}
        refreshControl={
          <RefreshControl
            refreshing={!!(isLoading && filter && setFilter)}
            onRefresh={() => {
              if (!setFilter || !initialFilter) {
                return;
              }

              setFilter?.({
                ...filter,
                ...initialFilter,
                isCall: true,
              });
            }}
            progressViewOffset={200}
          />
        }
        onEndReached={e => {
          if (!filter || !setFilter) {
            return;
          }
          console.log(
            'End Reached =-==-==->',
            filter,
            filter?.page_no * +filter?.limit,
            data?.length,
            +filter?.page_no * +filter?.limit <= (data || [])?.length,
          );

          if (+filter?.page_no * +filter?.limit <= (data || [])?.length) {
            setFilter?.({
              ...filter,
              page_no: +filter?.page_no + 1,
              isCall: true,
            });
          }
        }}
        keyExtractor={(_, index) => index?.toString()}
        ListEmptyComponent={EmptyComponent}
        {...rest}
      />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
