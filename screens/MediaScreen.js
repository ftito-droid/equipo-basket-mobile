import { Video } from "expo-av";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MediaScreen({ route, navigation }) {
  const { player } = route.params;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoSource = { uri: player.video };

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = async () => {
    if (videoRef.current) {
      await videoRef.current.replayAsync();
      setIsPlaying(true);
    }
  };

  const skip = async (seconds) => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      await videoRef.current.setPositionAsync(
        status.positionMillis + seconds * 1000,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video de {player.nombre}</Text>

      <View style={styles.videoBox}>
        <Video
          ref={videoRef}
          source={videoSource}
          resizeMode="contain"
          shouldPlay={true}
          useNativeControls
          style={{ width: "100%", height: 250, backgroundColor: "black" }}
        />
      </View>

      {/* Zonas de interacción agrupadas */}
      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.btnSmall} onPress={() => skip(-10)}>
          <Text style={styles.btnText}>-10s</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnMain,
            { backgroundColor: isPlaying ? "#ff9800" : "#4caf50" },
          ]}
          onPress={handlePlayPause}
        >
          <Text style={styles.btnText}>{isPlaying ? "PAUSA" : "PLAY"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSmall} onPress={handleRestart}>
          <Text style={styles.btnText}>REINICIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSmall} onPress={() => skip(10)}>
          <Text style={styles.btnText}>+10s</Text>
        </TouchableOpacity>
      </View>

      {/* Navegación clara en los extremos */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>⬅ VOLVER</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  btnSmall: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 80,
    alignItems: "center",
  },
  btnMain: {
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    minWidth: 100,
    alignItems: "center",
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  navBtn: {
    backgroundColor: "#2a5298",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 120,
    alignItems: "center",
  },
  btnText: { color: "white", fontSize: 13, fontWeight: "bold" },
});
