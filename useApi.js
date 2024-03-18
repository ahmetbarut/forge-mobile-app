import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useApi({ method, uri, body }) {
  return AsyncStorage.getItem("token").then((token) => {
    return fetch(`https://forge.laravel.com/api/v1/${uri}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  });
}
