import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import store from './store';
import Home from './src/screens/Home';
import ContactInfo from './src/screens/ContactInfo';
import AddContact from './src/screens/AddContact';
import EditContact from './src/screens/EditContact';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Contact Info" component={ContactInfo}/>
          <Stack.Screen name="Add Contact" component={AddContact} />
          <Stack.Screen name="Edit Contact" component={EditContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
