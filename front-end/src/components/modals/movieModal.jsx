import {Alert, Button, Modal, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";

export const MovieModal = ({movie, visible, onSave, onClose}) => {
    const [movieData, setMovieData] = useState({
        name: "",
        description: "",
        image: "",
        time: "",
    });

    const onEditMovie = (value, type) => {
        setMovieData((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    return <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            onClose();
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.title}>Ajouter un film</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nom du film"
                    value={movieData.name}
                    onChangeText={(text) => onEditMovie(text, "name")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description du film"
                    value={movieData.description}
                    onChangeText={(text) => onEditMovie(text, "description")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="URL du logo"
                    value={movieData.image}
                    onChangeText={(text) => onEditMovie(text, "image")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Temps du film"
                    value={movieData.time}
                    onChangeText={(text) => onEditMovie(text, "time")}
                />
                <Button style={styles.button} onPress={() => onSave(movieData)} title="Enregistrer"/>
                <Button style={styles.button} onPress={onClose} title="Annuler"/>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        width: "100%",
    },
    modalView: {
        width: "90%",
        minHeight: "40%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        rowGap: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        width: "100%",
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

