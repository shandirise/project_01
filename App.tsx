import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Pemanasan from './screens/Pemanasan';
import Plank from './screens/Plank'
import PushUp from './screens/PushUp'
import SitUp from './screens/SitUp'
import Squat from './screens/Squat'
import Progres from './screens/Progres'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FitZone" component={Home} />
        <Stack.Screen name="Pemanasan" component={Pemanasan} /> 
        <Stack.Screen name='Plank'component={Plank}/>
        <Stack.Screen name='PushUp' component={PushUp}/>
        <Stack.Screen name='SitUp' component={SitUp}/>
        <Stack.Screen name='Squat' component={Squat}/>
        <Stack.Screen name="Progres" component={Progres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}