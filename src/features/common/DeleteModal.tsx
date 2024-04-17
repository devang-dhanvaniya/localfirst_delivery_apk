import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// UI IMPORT
import UIModal, {UIModalProps} from '../../ui/elements/UIModal';
import {textStyles} from '../../styles';
import {Button} from '../../ui';

interface DeleteModalProps
  extends Omit<UIModalProps, 'children' | 'onDismiss'> {
  title?: string;
  text?: string;
  cancelText?: string;
  doneText?: string;
  onCancelPress?: () => void;
  onDonePress?: () => void;
  onDismiss?: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  const {
    contentContainerStyle,
    title = 'Delete Modal',
    text = 'Are you sure you want to delete ?',
    cancelText = 'Cancel',
    doneText = 'Delete',
    onCancelPress,
    onDonePress,
    onDismiss,
    ...rest
  } = props;
  return (
    <UIModal
      contentContainerStyle={[
        contentContainerStyle,
        {
          gap: 15,
        },
      ]}
      onDismiss={onDismiss}
      {...rest}>
      {title ? (
        <View>
          <Text style={[textStyles.dark16600, {textAlign: 'center'}]}>
            {title}
          </Text>
        </View>
      ) : null}
      <Text style={[textStyles.gray16500, {textAlign: 'center'}]}>{text}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 15,
        }}>
        <Button
          text={cancelText}
          style={{paddingHorizontal: 20}}
          onPress={() => {
            onCancelPress?.();
            onDismiss?.();
          }}></Button>
        <Button
          style={{paddingHorizontal: 20}}
          text={doneText}
          onPress={onDonePress}></Button>
      </View>
    </UIModal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({});
