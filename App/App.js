import React from 'react';
import { Provider } from 'react-redux';
import initStore from './store';
import Home from './components/Home';
import MovieProfile from './components/MovieProfile';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Stack } from 'react-native-router-flux';
import { createStackNavigator } from '@react-navigation/stack';

const store = initStore();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieProfile"
            component={MovieProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
