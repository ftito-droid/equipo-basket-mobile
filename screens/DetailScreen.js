import { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 1. Diccionario para tus imágenes locales
const localImages = {
  "magic.png": require("../assets/images/magic.png"),
  "lebron.png": require("../assets/images/lebron.png"),
  "kobe.png": require("../assets/images/kobe.png"),
  "kareem.png": require("../assets/images/kareem.png"),
  "jordan.png": require("../assets/images/jordan.png"),
};

export default function DetailScreen({ route, navigation }) {
  const { player } = route.params;
  const [visible, setVisible] = useState(false);

  // Lógica para seleccionar la imagen
  const imageSource = localImages[player.foto]
    ? localImages[player.foto]
    : { uri: player.foto };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>
        {player.nombre} {player.apellidos}
      </Text>

      {/* Imagen con Zoom */}
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>

      {/* Información detallada de Firebase */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Posición: <Text style={styles.value}>{player.posicion}</Text>
        </Text>
        <Text style={styles.label}>
          Edad: <Text style={styles.value}>{player.edad} años</Text>
        </Text>
        <Text style={styles.label}>
          Altura: <Text style={styles.value}>{player.altura} cm</Text>
        </Text>
        <Text style={styles.label}>
          Equipo: <Text style={styles.value}>{player.equipo}</Text>
        </Text>

        {/* Ejemplo de uso de los colores de Firebase */}
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Text style={styles.label}>Colores: </Text>
          <View
            style={[styles.colorCircle, { backgroundColor: player.color1 }]}
          />
          <View
            style={[styles.colorCircle, { backgroundColor: player.color2 }]}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.videoButton}
        onPress={() => navigation.navigate("Media", { player })}
      >
        <Text style={styles.buttonText}>Ver vídeo</Text>
      </TouchableOpacity>

      {/* Modal de Zoom */}
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalBg}>
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => setVisible(false)}
          >
            <Image
              source={imageSource}
              style={styles.zoomImage}
              resizeMode="contain"
            />
            <Text style={{ color: "white", marginTop: 20 }}>
              Toca para cerrar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20, backgroundColor: "#fff" },
  name: { fontSize: 26, fontWeight: "bold", marginBottom: 15 },
  image: { width: 200, height: 200, borderRadius: 10, marginBottom: 20 },
  infoContainer: { width: "100%", paddingHorizontal: 20 },
  label: { fontSize: 18, fontWeight: "600", marginTop: 8 },
  value: { fontWeight: "400", color: "#555" },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  videoButton: {
    backgroundColor: "#2a5298",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeModal: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  zoomImage: { width: "90%", height: "70%" },
});
