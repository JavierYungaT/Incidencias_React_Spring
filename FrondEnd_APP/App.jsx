import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import AddIncidentScreen from './components/screens/AddIncidentScreen';
import ReviewIncidentsScreen from './components/screens/ReviewIncidentsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Incidentes" component={HomeScreen} />
        <Stack.Screen name="Ingresar Incidente" component={AddIncidentScreen} />
        <Stack.Screen name="Revisar Incidentes" component={ReviewIncidentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
