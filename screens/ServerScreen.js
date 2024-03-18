import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SitesScreen from "./SitesScreen"; // Sites ekranının dosya yolu
import DatabaseScreen from "./DatabaseScreen.js"; // Database ekranının dosya yolu
import SSHKeysScreen from "./SSHKeysScreen";

const Tab = createBottomTabNavigator();

export default function ServerScreen({ route }) {
  const { params } = route;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Sites">
        {() => <SitesScreen serverId={params.serverId} />}
      </Tab.Screen>
      <Tab.Screen name="Database">
        {() => <DatabaseScreen serverId={params.serverId} />}
      </Tab.Screen>
      <Tab.Screen name="SSH Keys">
        {() => <SSHKeysScreen serverId={params.serverId} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
