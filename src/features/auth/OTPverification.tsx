import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// UI IMPORT
import {Button, ControlledInput} from '../../ui';

// PROJECT IMPORT
import {useAuth} from '../../hooks';

// THIRD - PARTY IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

const OTPverification = () => {
  const {onLogin} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (values: any) => {
    onLogin(values);
  };

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/LoginBg.png')}>
        <ScrollView>
          <View style={styles.mainbox}>
            <View style={styles.container}>
              <Image
                source={require('../../assets/images/otpVerification.png')}
                style={styles.logo}
              />
              <Text style={styles.title}>OTP Verification</Text>
              <Text style={styles.text}>
                Enter the OTP sent to +91 9876543210
              </Text>
            </View>
            <View style={styles.inputContainer}>
              {[0, 1, 2, 3].map(index => (
                <TextInput
                  key={index}
                  style={styles.otpinput}
                  // value={otp[index]}
                  // onChangeText={input => handleOtpChange(input, index)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>
            <Text style={styles.donttext}>00:12 Sec</Text>
            <Text style={styles.donttext}>
              Don’t receive code? <Text style={styles.signupText}>Re-send</Text>
            </Text>
            <View>
              <Button text="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default OTPverification;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 30,
    resizeMode: 'cover',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainbox: {
    padding: 28,
  },

  // LOGO BOX
  logo: {
    marginBottom: 25,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#101010',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#878787',
    textAlign: 'center',
  },

  // INPUT
  fieldbox: {
    paddingVertical: 30,
  },

  // DON'T
  donttext: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: '400',
    color: '#878787',
    textAlign: 'center',
  },
  signupText: {
    color: '#FF9F1C',
  },

  // OTP
  inputContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  otpinput: {
    backgroundColor: '#FF9F1C',
    color: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    // width: 50,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});
