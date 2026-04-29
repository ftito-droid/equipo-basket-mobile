import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 Equipo Basket</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Listado")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold" },
  button: { marginTop: 20, backgroundColor: "#2a5298", padding: 10 },
  buttonText: { color: "#fff" },
});
