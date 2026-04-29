import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

import DetailScreen from "./screens/DetailScreen";
import InicioScreen from "./screens/InicioScreen";
import ListScreen from "./screens/ListScreen";
import MediaScreen from "./screens/MediaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1E3A8A" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: "Equipo Basket" }} 
        />

        <Stack.Screen 
          name="Listado" 
          component={ListScreen} 
          options={({ navigation }) => ({
            title: "Listado de jugadores",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
              <Text style={{ color: "#FFFFFF", marginRight: 10 }}>
                Inicio
              </Text>
            </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
          options={({ navigation }) => ({
            title: "Detalle del jugador",
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
            <Text style={{ color: "#FFFFFF", marginRight: 10 }}>
              Inicio
            </Text>
            </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Media"
          component={MediaScreen}
          options={({ navigation }) => ({
          title: "Multimedia",
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Text style={{ color: "#FFFFFF", marginRight: 10 }}>
              Inicio
            </Text>
            </TouchableOpacity>
          ),
        })}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
