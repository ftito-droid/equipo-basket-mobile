import { StyleSheet } from "react-native";

export const playersStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    backgroundColor: "#ddd",
  },

  info: { flex: 1 },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  position: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  team: {
    fontSize: 13,
    color: "#999",
    marginTop: 4,
  },
});
