import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { DrawerNavigator } from "./src/navigation/DrawerNavigator";

import { Start } from "./src/screens/Start";
import { Profile } from "./src/screens/Profile";
import { YourCart } from "./src/screens/YourCart";
import { Favourites } from "./src/screens/Favourites";
import { YourOrders } from "./src/screens/YourOrders";
import { SecondPage } from "./src/screens/SecondPage";

export type RootStackParamList = {
  Start: undefined;
  SecondPage: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const StartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Start"
        component={StartStack}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              color="grey"
              backgroundColor="transparent"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="gear"
              color="grey"
              backgroundColor="transparent"
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const menuItems = [
  {
    label: "Start",
    component: Tabs,
  },
  {
    label: "Your Cart",
    component: YourCart,
  },
  {
    label: "Favourites",
    component: Favourites,
  },
  {
    label: "Your Orders",
    component: YourOrders,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DrawerNavigator items={menuItems} />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
