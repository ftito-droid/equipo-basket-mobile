import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { db } from "../config/firebase";

export default function ListScreen({ navigation }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("Intentando conectar...");

    const unsubscribe = onSnapshot(
      collection(db, "players"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Datos de los jugadores:", data);
        setPlayers(data);
      },
      (error) => {
        console.error("Error en Firebase:", error);
      },
    );

    // El return debe ir AQUÍ, dentro del useEffect
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }}
            onPress={() => navigation.navigate("Detalle", { player: item })}
          >
            <Text>
              {item.nombre} {item.apellidos}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 50 }}>
            No hay jugadores disponibles o conectando...
          </Text>
        }
      />
    </View>
  );
}
