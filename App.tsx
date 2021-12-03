import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from 'aws-amplify-react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//import { Authenticator } from 'aws-amplify-react-native'
import { AmplifyTheme } from './/src/AmplifyTheme'
import awsconfig from ".//src/aws-exports";
Amplify.configure(awsconfig);



function App() {
  {/*const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
    ],
  }*/}
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //<Authenticator usernameAttributes="email" signUpConfig={signUpConfig} theme={AmplifyTheme} >
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
      //</Authenticator>
    );
  }
}
export default withAuthenticator(App, false, [], null, AmplifyTheme)
