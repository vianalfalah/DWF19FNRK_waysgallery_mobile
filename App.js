import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { AsyncStorage, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LogedScreen from "./src/screens/LogedScreen";
// import { Context } from "./Context/Context";
import { API, setToken } from "./config/config";
// import { ContextProvider } from "./Context/Context";

const Stack = createStackNavigator();
// const storage = AsyncStorage || localStorage;
// if (storage.token) setToken(storage.token);

function App() {
  // const [state, dispatch] = useContext(Context);

  return (
    // <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogedLanding"
          component={LogedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </ContextProvider>
  );
}

export default App;
