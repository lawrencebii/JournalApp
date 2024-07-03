import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const screenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 60,
    },
  };
  const HomeIcon: React.JSX.Element = <Icon name="rocket" />;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => <View>{HomeIcon}</View>,
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
