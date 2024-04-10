import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// UI IMPORT

// PROJECT IMPORT
import {Colors} from '../../constant';
import {useAuth} from '../../hooks';
import {prepareResponse} from '../../commonFunctions';
import {ResToast, initialResToast} from '../common';

// THIRD - PARTY IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {Button, ControlledInput, Text, Toast} from '../../ui';

const Login = ({navigation}: any) => {
  const {onLogin} = useAuth();
  const [resToast, setResToast] = useState<ResToast>(initialResToast);
  const schema: any = yup.object({
    email_id: yup.string().required('Please enter a email'),
    password: yup
      .string()
      .required('Please enter a password')
      .min(6, 'Password must be of 6 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<any>(schema),
    defaultValues: {
      email_id: 'nensi@gmail.com',
      password: '6A3iItdI97ShiwY',
    },
  });

  const onSubmit = async (values: any) => {
    let payload = {
      ...values,
    };
    const res: any = await onLogin(payload);
    setResToast(prepareResponse(res));
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
                source={require('../../assets/images/Logo.png')}
                style={styles.logo}
              />
              <Text style={styles.title}>Login to your account</Text>
              <Text style={styles.text}>Please sign in to your account </Text>
            </View>
            <View style={styles.fieldbox}>
              <ControlledInput
                name="email_id"
                label="Email"
                placeholder="Enter Email"
                control={control}
                errors={errors}
              />
              <ControlledInput
                name="password"
                label="Password"
                placeholder="Enter Password"
                variant="Password"
                control={control}
                errors={errors}
              />
              {/* <View>
                <Text
                  style={styles.forgot}
                  onPress={() => {
                    navigation.navigate(Navigator.FORGOT_PASSWORD, {
                      title: 'Forgot Password',
                    });
                  }}>
                  Forgot Password ?
                </Text>
              </View> */}
              <View>
                <Button text="Sign In" onPress={handleSubmit(onSubmit)} />
              </View>
              <View style={styles.orbox}>
                <View style={styles.border} />
                <Text style={styles.ortext}>Or sign in with</Text>
                <View style={styles.border} />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <Toast resToast={resToast} setResToast={setResToast} />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 30,
    resizeMode: 'cover',
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
    color: Colors.BLACK,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.SECONDRAY,
  },

  // INPUT
  fieldbox: {
    paddingVertical: 30,
  },
  field: {
    paddingBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  forgot: {
    marginVertical: 5,
    textAlign: 'right',
    fontSize: 14,

    color: Colors.SECONDRAY,
    fontWeight: '500',
  },

  // BUTTON
  button: {
    marginTop: 12,
    borderRadius: 50,
    paddingVertical: 12,
    backgroundColor: '#FF9F1C',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 50,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  // OR SIGN
  orbox: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.SECONDRAY,
    transform: [{scaleY: 0.5}],
  },
  ortext: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.SECONDRAY,
  },

  // TWO IMAGE
  source: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  imagebox: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#D6D6D6',
    padding: 5,
  },

  // DON'T
  donttext: {
    paddingVertical: 20,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  signupText: {
    color: '#FF9F1C',
  },
});
