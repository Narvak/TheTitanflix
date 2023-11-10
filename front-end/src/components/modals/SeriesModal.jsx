import {Alert, Button, Modal, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";

export const SeriesModal = ({series, title, visible, onSave, onClose}) => {
    const [seriesData, setSeriesData] = useState({
        name: series?.name || "",
        logo: series?.logo || "",
        averageTime: series?.averageTime || "",
    });

    const onEditSeries = (value, type) => {
        setSeriesData((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    useEffect(() => {
        setSeriesData({
            name: series?.name || "",
            logo: series?.logo || "",
            averageTime: series?.averageTime || "",
        });
    }, [series]);

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
                    placeholder="Nom de la série"
                    value={seriesData.name}
                    onChangeText={(text) => onEditSeries(text, "name")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="URL du logo"
                    value={seriesData.logo}
                    onChangeText={(text) => onEditSeries(text, "logo")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Temps moyen des épisodes"
                    value={`${seriesData.averageTime}`}
                    onChangeText={(text) => onEditSeries(text, "averageTime")}
                />
                <Button style={styles.button} onPress={() => onSave(seriesData)} title="Enregistrer"/>
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

