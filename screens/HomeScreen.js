import { View, Text, ScrollView } from "react-native";
import ServerCard from "../components/Cards/ServerCard";
import Table from "../components/Table";
import useApi from "../useApi";
import React from "react";

export default function HomeScreen() {
    const [servers, setServers] = React.useState([]);
    useApi({ method: "GET", uri: "servers" }).then((response) => {
        setServers(response.servers);
    });
    
  return (
    <View style={{ padding: 10 }}>
      <ScrollView horizontal={true} style={{padding: 15, margin: '20', height: '40%'}}>
        {servers && servers.map((item) => (
          <ServerCard
            key={item.id}
            features={[item.php_version, item.database_type]}
            ipAddress={item.ip_address}
            isConnected={item.is_ready}
            logo={"server"}
            name={item.name}
          />
        ))}
      </ScrollView>
      <Table />
    </View>
  );
}
