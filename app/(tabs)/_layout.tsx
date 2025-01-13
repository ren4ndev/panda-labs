import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Feather size={24} name="home" color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <Feather size={24} name="settings" color="black" />,
        }}
      />
    </Tabs>
  );
}
