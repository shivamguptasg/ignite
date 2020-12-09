import React from 'react';
import { StatusBar, Platform, View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './app/redux/store'
import Loader from './app/components/loader'

import Home from './app/screens/home'
import BookList from './app/screens/bookList'
import BookReader from './app/screens/webView'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookReader" component={BookReader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Loader />
      <Routes />
    </Provider>
  );
};
export default App;
