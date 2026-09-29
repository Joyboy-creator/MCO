import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import MarketScreen from "./MarketScreen";
import ProductDetails from "./ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#222222",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Market App",
          }}
        />

        <Stack.Screen
          name="Market"
          component={MarketScreen}
          options={{
            title: "Market",
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: "Product Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}