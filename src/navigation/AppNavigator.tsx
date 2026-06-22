import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Route from './routes';

import NavigationService from './NavigationService';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { color } from '@/assets';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '@/screens/Login/Login';
import SignUp from '@/screens/SignUp/SignUp';
import CreateQuote from '@/screens/CreateQuote/CreateQuote';
import CreateRecepient from '@/screens/CreateRecepient/CreateRecepient';
import UpdateQuote from '@/screens/UpdateQuote/UpdateQuote';
import CreateTransfer from '@/screens/CreateTransfer/CreateTransfer';
import FundTransfer from '@/screens/FundTransfer/FundTransfer';
import FinishScreen from '@/screens/FinishScreen/FinishScreen';
import WelcomeScreen from '@/screens/WelcomeScreen/WelcomeScreen';

const Stack = createStackNavigator();

export const defaultBackButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.backIcon}
      onPress={() => {
        NavigationService.goBack();
      }}
    >
      <Ionicons name='arrow-back' size={24} color={color.brand.primary} />
    </TouchableOpacity>
  );
};

/**
 * AppNavigator component for managing navigation.
 * @returns {JSX.Element} - The AppNavigator component.
 */
const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Route.LOGIN}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => defaultBackButton(),
        headerTitle: '',
        presentation: 'modal',
        header: () => null,
      }}
    >
      <Stack.Screen
        name={Route.LOGIN}
        component={Login}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.SIGN_UP}
        component={SignUp}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.CREATE_QUOTE}
        component={CreateQuote}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.CREATE_RECEPIENT}
        component={CreateRecepient}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.UPDATE_QUOTE}
        component={UpdateQuote}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.CREATE_TRANSFER}
        component={CreateTransfer}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.FUND_TRANSFER}
        component={FundTransfer}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.FINISH_SCREEN}
        component={FinishScreen}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
      <Stack.Screen
        name={Route.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={() => ({ headerStyle: { backgroundColor: '#f9f9fc' } })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    paddingHorizontal: 24,
  },
});

export default AppNavigator;
