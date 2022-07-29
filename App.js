import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenMenu from "./screens/ScreenMenu/";
import ScreenOne from "./screens/ScreenOne/";
import ScreenTwo from "./screens/ScreenTwo/";
import ScreenThree from "./screens/ScreenThree/";
import ScreenFour from "./screens/ScreenFour/";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScreenMenu" component={ScreenMenu} options={{headerShown: false}} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
          <Stack.Screen name="ScreenFour" component={ScreenFour} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

