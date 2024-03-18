// App.js

import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ServersScreen from "./screens/ServersScreen";
import SitesScreen from "./screens/SitesScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useApi from "./useApi";
import SetTokenModal from "./components/SetTokenModal";

const Tab = createBottomTabNavigator();
const App = () => {
  const [canShow, setCanShow] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [token, setToken] = useState("");

  AsyncStorage.getItem("token").then((token) => {
    useApi({ method: "GET", uri: "user", body: { token } }).then((response) => {
      if (response.status === 401) {
        setIsModalVisible(true);
      } else {
        setIsModalVisible(false);
      }
    });
  });

  return (
    <NavigationContainer>
      {isModalVisible && (
        <SetTokenModal
          visible={isModalVisible}
          handleVisibleModal={setIsModalVisible}
        />
      )}
      {!isModalVisible && (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Servers") {
                iconName = focused ? "server" : "server-outline";
              } else if (route.name === "Sites") {
                iconName = focused ? "globe" : "globe-outline";
              } else if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          // screenOptions={{
          //   activeTintColor: 'tomato',
          //   inactiveTintColor: 'gray',
          // }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Servers" component={ServersScreen} />
          <Tab.Screen name="Sites" component={SitesScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
