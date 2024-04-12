import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

// UI IMPORT
import {Button} from '../../ui';

// PROJECT IMPORT
import {useAuth} from '../../hooks';

type InputProps = {
  length?: number;
  onComplete?: (pin: string) => void;
};

const OTPverification = ({length = 4, onComplete}: InputProps) => {
  const {onLogin} = useAuth();
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));
  const [counter, setCounter] = useState(60);
  const inputRef: any = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [mainOtp, setMainOtp] = useState('1234');

  let newPin = [...OTP];
  const handleTextChange = (input: string, index: number) => {
    newPin[index] = input;
    setOTP(newPin);

    // if (input.length === 1 && index < length - 1) {
    //   inputRef.current[index + 1]?.focus();
    // }
    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
    if (newPin.every(digit => digit !== '')) {
      onComplete && onComplete(newPin?.join(''));
    }
    console.log(
      newPin.some((digit, i) => i === index + 1 && digit === ''),
      'digit[index + 1]',
    );

    if (
      newPin.some((digit, i) => i === index + 1 && digit === '') &&
      input.length === 1
    ) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const onSubmit = async (values: any) => {
    console.log('newPin====>', newPin, 'mainOtp====>', mainOtp);
    const arr = [];

    onLogin(values);
  };

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
  }, [counter]);

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
              {/* {[0, 1, 2, 3].map(index => (
                <TextInput
                  key={index}
                  style={styles.otpinput}
                  // value={otp[index]}
                  // onChangeText={input => handleOtpChange(input, index)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))} */}
              {Array.from({length}, (_, index) => (
                <TextInput
                  inputMode="numeric"
                  key={index}
                  maxLength={1}
                  value={OTP[index]}
                  onChangeText={text => handleTextChange(text, index)}
                  ref={ref => (inputRef.current[index] = ref as TextInput)}
                  style={styles.otpinput}
                />
              ))}
            </View>
            <Text style={styles.donttext}>00:{counter} Sec</Text>
            <Text style={styles.donttext}>
              Don’t receive code?{' '}
              <Pressable
                onPress={() => {
                  setCounter(60);
                }}>
                <Text style={styles.signupText}>Re-send</Text>
              </Pressable>
            </Text>
            <View>
              <Button text="Submit" onPress={onSubmit} />
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
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    // width: 50,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});
