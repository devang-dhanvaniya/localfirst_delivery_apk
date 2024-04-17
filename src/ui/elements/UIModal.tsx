import { StyleSheet } from 'react-native';
import React from 'react';

// PROJECT IMPORT
import { hp, wp } from '../../commonFunctions';
import { Colors } from '../../constant';

// THIRD - PARTY IMPORT
import { Portal, Modal, ModalProps } from 'react-native-paper';

export interface UIModalProps extends ModalProps { }

const UIModal = (props: UIModalProps) => {
  const {  contentContainerStyle, children, ...rest } = props;
  return (
    <Portal>
      <Modal
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
    width: wp(80),
    top: hp(10),
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
  },
});
