import React, { Component } from "react";
import { Image, Text } from "react-native";
import { StyleSheet } from "react-native";

const Profile = () => {
    return (
        <div style={styles.profile_containter}>
            <Image
                source={{ uri: "http://imageipsum.com/200x200" }}
                style={{ height: 120, width: "auto" }}
            />
            <Text>Alex J.</Text>
        </div>
    );
};

const styles = StyleSheet.create({
    profile_containter: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "space-around",
    },
});

export default Profile;
