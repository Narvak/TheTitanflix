import {StyleSheet, Text, View} from "react-native";

export const ManageEpisodes = () => {
    return (
        <View>
            <Text style={styles.textSecond}>Episodes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    textSecond: {
        color: "#f1f1f1",
        textAlign: "center",
        marginHorizontal: "auto",
        fontSize: 21,
        marginVertical: 10,
    },
    picker: {
        backgroundColor: "white",
        color: "black",
        padding: 10,
        borderRadius: 13,
        marginHorizontal: 10,
        marginVertical: 10,
    }
});
