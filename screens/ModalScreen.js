import React, { useEffect, useState } from "react";
import { View, Text, Modal, Button } from "react-native";

const MainScreen = () => {
  const [token, setToken] = useState("");
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Tokenün geçerliliğini kontrol etme
  const checkTokenValidity = async () => {
    try {
      // Token kontrolü yapılabilir, örneğin bir API isteğiyle
      // Burada sabit olarak bir token kontrol edildiğini varsayalım
      const isValidToken = token === "gecerli_token";
      setIsTokenValid(isValidToken);
    } catch (error) {
      console.error("Token kontrolü sırasında bir hata oluştu:", error);
    }
  };

  // Modal'i açma işlevi
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Modal'i kapatma işlevi
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Tokenün geçerliliğini kontrol etme ve istek gönderme
  const fetchData = async () => {
    try {
      await checkTokenValidity();

      if (!isTokenValid) {
        openModal(); // Geçersiz token olduğunda modal aç
      } else {
        // Token geçerli ise isteği gönder
        const response = await fetch("https://api.example.com/data", {
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        console.log("Alınan veri:", data);
      }
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Modal içeriği
  const modalContent = (
    <View>
      <Text>Tokeniniz geçerli değil!</Text>
      <Button title="Token Kaydet" onPress={closeModal} />
    </View>
  );

  return (
    <View>
      {/* Ana ekran içeriği */}
      {/* Tokenin geçerliliği kontrol ediliyor ve istek gönderiliyor */}

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        {modalContent}
      </Modal>
    </View>
  );
};

export default MainScreen;
