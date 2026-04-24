import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "./screens/DetailScreen";
import InicioScreen from "./screens/InicioScreen";
import ListScreen from "./screens/ListScreen";
import MediaScreen from "./screens/MediaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />

        <Stack.Screen name="Listado" component={ListScreen} />

        <Stack.Screen name="Detalle" component={DetailScreen} />

        <Stack.Screen name="Media" component={MediaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
