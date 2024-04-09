module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
