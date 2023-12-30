import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";

import Profile from "./components/profile";
import Schedule from "./components/schedule";

export default function App() {
    return (
        <ScrollView>
            <Profile />
            <Schedule />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    profile: {},
});
