import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import PatientData from './screens/PatientData';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="PatientData" component={PatientData} options={{headerShown: true, 
                                                                                  headerTransparent: true, headerTitle: '', 
                                                                                              headerTintColor: "#fff"}}/>
            <Stack.Screen name="MedicalSpecialty" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;