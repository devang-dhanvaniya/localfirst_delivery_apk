import {
    FlatList,
    FlatListProps,
    RefreshControl,
    StyleSheet,
    View,
} from 'react-native';
import React from 'react';

// PROJECT IMPORT
import { Filter } from '../../features/common';
import { hp, wp } from '../../commonFunctions';

// THIRD - PARTY IMPORT
import { ActivityIndicator } from 'react-native-paper';

export interface ListProps extends FlatListProps<any> {
    isLoading?: boolean;
    filter?: Filter;
    setFilter?: React.Dispatch<React.SetStateAction<Filter>>;
    initialFilter?: any;
    isRefresh?: boolean;
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
        ...rest
    } = props;

    const Footer = () => {
        return (
            <View style={styles.footer}>
                {isLoading ? <ActivityIndicator /> : null}
            </View>
        );
    };

    if (isLoading && (filter?.page_no === 1 || !filter)) {
        return (
            <View
                style={{
                    width: wp(100),
                    height:horizontal ? hp(15) : hp(80),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
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
                                ...initialFilter,
                            });
                        }}
                        progressViewOffset={200}
                    />
                }
                onEndReached={e => {
                    if (!filter || !setFilter) {
                        return;
                    }
                    if (+filter?.page_no * +filter?.limit <= (data || [])?.length) {
                        setFilter?.({
                            ...filter,
                            page_no: filter?.page_no + 1,
                        });
                    }
                }}
                keyExtractor={(_, index) => index?.toString()}
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
});
