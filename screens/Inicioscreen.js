import { StyleSheet, Text, View } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipo Basket</Text>
      <Text style={styles.subtitle}>Bienvenido a tu app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
  },
});
