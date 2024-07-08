import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';

import { colors } from './src/common/styles/colors/colors';
import CreateJournal from './src/screens/Journal/CreateJournal';

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

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <View>
              <Icon

                name={'home'}
                size={30}
                color={focused ? colors.PRIMARY_YELLOW : colors.DARK_BLUE}
              /></View>,
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateJournal}
          options={{
            tabBarIcon: ({ focused }) => <View>
              <Icon

                name={'plus'}
                size={35}
                color={focused ? colors.PRIMARY_YELLOW : colors.DARK_BLUE}
              /></View>,
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <View>
              <IconF6

                name={'circle-user'}
                size={30}
                color={focused ? colors.PRIMARY_YELLOW : colors.DARK_BLUE}
              />
            </View>,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
