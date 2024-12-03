import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";

import CarDetailed from "./src/Components/CarDetailed/CarDetailed";

import Chat from "./src/Screens/Chat";
import HomeScreen from "./src/Screens/HomeScreen";
import MainBody from "./src/Screens/MainScreen";
import Onboarding from "./src/Screens/Onboarding";
import SingleChart from "./src/Screens/SingleChat";
import SignUp from "./src/Screens/SignUp";
import Profile from "./src/Screens/Profile";
import DashBoard from "./src/Screens/DashBoard";
import HostProfile from "./src/Screens/HostProfile";
import PaymentHistory from "./src/Screens/PaymentHistory";
import HostBoats from "./src/Screens/HostBoats";
import Reservas from "./src/Screens/Reservas";
import GuestProfile from "./src/Screens/GuestProfile";

import { I18nextProvider, useTranslation } from "react-i18next";
import { LogBox } from "react-native";
import { store } from "./src/Store/Store";
import 'react-native-get-random-values';
import i18n from "./i18n";


export default function App() {
  const Stack = createNativeStackNavigator();

  LogBox.ignoreLogs(["new NativeEventEmitter"]);
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="onBoarding">
              <Stack.Screen
                name="onBoarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="HomeTabs"
                component={HomeScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="HostBoats"
                component={HostBoats}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Main"
                component={MainBody}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CarDetails"
                component={CarDetailed}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="GuestProfile"
                component={GuestProfile}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SingleChat"
                component={SingleChart}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HostProfile"
                component={HostProfile}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PaymentHistory"
                component={PaymentHistory}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Reservas"
                component={Reservas}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
