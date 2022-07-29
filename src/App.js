import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import PatientData from './screens/PatientData';
import MedicalSpecialty from './screens/MedicalSpecialty';
import SelectDate from './screens/SelectDate';
import FinishScheduling from './screens/FinishScheduling';

const Stack = createNativeStackNavigator();

const headerConfig = {headerShown: true, headerTransparent: true, 
                                  headerTitle: '', headerTintColor: "#fff"}
const App = () => {
  return (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="PatientData" component={PatientData} options={headerConfig}/>
            <Stack.Screen name="MedicalSpecialty" component={MedicalSpecialty} options={headerConfig}/>
            <Stack.Screen name="SelectDate" component={SelectDate} options={headerConfig}/>
            <Stack.Screen name="FinishScheduling" component={FinishScheduling} options={headerConfig}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;