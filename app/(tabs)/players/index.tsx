import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { db } from "../../../config/firebase";
import { playersStyles as styles } from "./playersStyles";

export default function PlayersScreen() {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const ref = collection(db, "players");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPlayers(data);
    };

    cargarDatos();
  }, []);

  return (
    <View style={styles.container}>
      {/* SUBTÍTULO / NOMBRE DEL EQUIPO */}
      <Text style={styles.header}>The Breakpoints Basket Team</Text>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { borderLeftColor: item.color1 }]}
          >
            <Image source={{ uri: item.foto }} style={styles.avatar} />

            <View style={styles.info}>
              <Text style={styles.name}>
                {item.nombre} {item.apellidos}
              </Text>
              <Text style={styles.position}>{item.posicion}</Text>
              <Text style={styles.team}>{item.equipo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
