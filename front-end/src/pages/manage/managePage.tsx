import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import {useNavigate} from "react-router-native";
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";
import RNPickerSelect from 'react-native-picker-select';
import {ManageMovies} from "../../components/manages/ManageMovies";
import {ManageSeries} from "../../components/manages/ManageSeries";
import {ManageEpisodes} from "../../components/manages/ManageEpisodes";

const MOVIES = "Films";
const SERIES = "Séries";
const EPISODES = "Épisodes";

const options = [
    { label: MOVIES, value: MOVIES },
    { label: SERIES, value: SERIES },
    { label: EPISODES, value: EPISODES },
];

const manageTypes = {
    [MOVIES]: () => <ManageMovies />,
    [SERIES]: () => <ManageSeries />,
    [EPISODES]: () => <ManageEpisodes />,
}

export default function GestionPage() {
    const [selectedType, setSelectedType] = useState(options[0].value);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Gestion</Text>
            <View>
                <RNPickerSelect
                    items={options}
                    placeholder={'Sélectionnez un type'}
                    onValueChange={(value) => setSelectedType(value)}
                    value={selectedType}
                    style={{
                        inputIOS: styles.picker,
                        inputAndroid: styles.picker,
                    }}
                />
                {
                    manageTypes[selectedType]()
                }
            </View>
        </SafeAreaView>
    );
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
