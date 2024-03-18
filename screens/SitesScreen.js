import { useState } from "react";
import { View, Text } from "react-native";
import useApi from "../useApi";

export default function SitesScreen({ serverId }) {
  const [sites, setSites] = useState([]);
  console.log(serverId);
  useApi({ method: "GET", uri: `servers/${serverId}/sites` }).then(
    (response) => {
      console.log(response);
      // setSites(response.sites);
    }
  );

  return (
    <View>
      <Text>Sites Screen</Text>
    </View>
  );
}
