import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Scan from './components/Scan';
import Size from './components/Size';
import Style from './components/Style';
import Extra from './components/Extra';
import Overview from './components/Overview';

import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Style"
            component={Style}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Size"
            component={Size}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Extra"
            component={Extra}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
