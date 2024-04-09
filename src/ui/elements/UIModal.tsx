import { StyleSheet, Text } from 'react-native';
import React from 'react';

// PROJECT IMPORT
import { Colors } from '../../constant';

// THIRD - PARTY IMPORT
import { Portal, Modal, ModalProps } from 'react-native-paper';

interface UIModalProps extends ModalProps { }

const UIModal = (props: UIModalProps) => {
  const { visible, contentContainerStyle,children, ...rest } = props;
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={[styles.modal, contentContainerStyle]}
        {...rest}>
        {children}
      </Modal>
    </Portal>
  );
};

export default UIModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    position:'absolute',
    top: 0,
  },
});
