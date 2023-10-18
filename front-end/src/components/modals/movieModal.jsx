import {Alert, Button, Modal, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import * as DocumentPicker from 'expo-document-picker';
import {storage} from "../../config/firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";


export const MovieModal = ({movie, title, visible, onSave, onClose}) => {
    const [fileMovie, setFileMovie] = useState(null);
    const [movieData, setMovieData] = useState({
        name: movie?.name || "",
        description: movie?.description || "",
        image: movie?.image || "",
        time: movie?.time || "",
    });

    const onEditMovie = async (value, type) => {
        setMovieData((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    const handleFileSelection = async () => {
        try{
            const result = await DocumentPicker.getDocumentAsync();
            const {uri, name} = result.assets[0];

            const response = await fetch(uri);
            const blob = await response.blob();

            setFileMovie({
                name,
                blob
            })
        } catch (err) {
            console.log(err)
        }
    };

    const onSaveMovie = async () => {
        try {
            if (!fileMovie) {
                console.error('fileMovie is not defined');
                return;
            }

            const {name , blob } = fileMovie;

            const videoRef = ref(storage, `movies/${name}`);

            if (!videoRef || !blob || !name) {
                console.error('videoRef or blob is missing');
                return;
            }
            console.log("videoRef, blob 2")

            await uploadBytesResumable(videoRef, blob);

            const movieUrl = await getDownloadURL(videoRef);

            onSave({ ...movieData, movieUrl });
        } catch (err) {
            console.error('An error occurred:', err);
        }
    }


    useEffect(() => {
        setMovieData({
            name: movie?.name || "",
            description: movie?.description || "",
            image: movie?.image || "",
            time: movie?.time || "",
        });
    }, [movie]);

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
                <Text style={styles.title}>{title}</Text>
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
                    value={`${movieData.time}`}
                    onChangeText={(text) => onEditMovie(text, "time")}
                />
                <Button title="Upload Video" onPress={handleFileSelection}/>
                <Button style={styles.button} onPress={onSaveMovie} title="Enregistrer"/>
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

