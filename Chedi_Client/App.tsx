
import React, { useEffect } from 'react';
import CheckAuth from './router/CheckAuth';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" />
        <CheckAuth />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

