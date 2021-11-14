import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

export default function ProfileHeader() {

    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user.username}</Text>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="add-box" size={30} color="black" />
                <Ionicons name="menu" size={30} color="black" style={{marginLeft:12}} />                  
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }
});
