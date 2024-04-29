const getBundleID = () => {
  if (process.env.APP_VARIANT === 'production') {
    return 'com.hubayb';
  }

  if (process.env.APP_VARIANT === 'preview') {
    return 'com.hubayb.preview';
  }

  return 'com.hubayb.dev';
};

const getAppName = () => {
  if (process.env.APP_VARIANT === 'production') {
    return 'Hubayb';
  }
  if (process.env.APP_VARIANT === 'preview') {
    return 'Hubayb (Preview)';
  }
  return 'Hubayb (Dev)';
};

const bundleID = getBundleID();

export default {
  name: getAppName(),
  slug: 'hubayb',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'hubayb',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: bundleID,
  },
  android: {
    package: bundleID,
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Outfit-Regular.ttf',
          './assets/fonts/Outfit-Medium.ttf',
          './assets/fonts/Outfit-Bold.ttf',
        ],
      },
    ],
    [
      'expo-location',
      {
        locationWhenInUsePermission: 'Show current location on map.',
      },
    ],
  ],

  // ? Change this to actual app id from expo account
  // updates: {
  //   url: 'https://u.expo.dev/7bdbd648-8ede-4561-b4a5-5fb7f62ded40',
  // },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  experiments: {
    typedRoutes: true,
  },

  extra: {
    eas: {
      projectId: '7bdbd648-8ede-4561-b4a5-5fb7f62ded40',
    },
  },
};
