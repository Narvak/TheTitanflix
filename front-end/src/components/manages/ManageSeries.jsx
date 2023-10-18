import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View, Modal, Alert, Pressable, TextInput, FlatList} from "react-native";
import axios from "axios";
import {baseUrl} from "../../config";
import {SeriesModal} from "../modals/SeriesModal";
import {renderSeriesItem} from "../../pages/filmsEtSeries/series";

export const ManageSeries = () => {
    const [createSeriesModalIsOpen, setCreateSeriesModalIsOpen] = useState(false);
    const [editSeriesModalIsOpen, setEditSeriesModalIsOpen] = useState(false);
    const [currentSeries, setCurrentSeries] = useState(null);
    const [series, setSeries] = useState([])
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const onOpenCreateSerieModal = () => setCreateSeriesModalIsOpen(true);

    const onCloseCreateSerieModal = () => setCreateSeriesModalIsOpen(false);

    const onOpenEditSerieModal = (seriesId) => {
        const seriesFind = series.find((series) => series._id === seriesId);

        setCurrentSeries(seriesFind);

        setEditSeriesModalIsOpen(true);
    }

    const onCloseEditSerieModal = () => setEditSeriesModalIsOpen(false);

    const onDetailsNavigate = (series) => {
    };

    const onChangeSearch = (text) => {
        setSearchValue(text);

        if (text === "") {
            setFilteredSeries(series);
        }

        setFilteredSeries(series.filter((series) => {
            return series.name.toLowerCase().includes(text.toLowerCase());
        }));
    }

    const onCreateSerie = async (series) => {
        try {
            const {name, description, image, time} = series;

            if (!name || !description || !image || !time) {
                return console.log("null or undefined");
            }

            const newSerie = await axios.post(`${baseUrl}/series`,
                series,
                {withCredentials: true}
            );
        } catch (error) {
            console.log(error);
        }

        onCloseCreateSerieModal();
    };

    const onEditSerie = async (series) => {
        try {
            const result = await axios.patch(`${baseUrl}/series/${currentSeries._id}`,
                series,
                {withCredentials: true}
            );

            setSeries((prev) => prev.map((prevSerie) => {
                if (prevSerie._id === currentSeries._id) {
                    return result.data.seriesUpdated;
                }

                return prevSerie;
            }));
        } catch (error) {
            console.log(error);
        }

        onCloseEditSerieModal();
    }

    const onDeleteSerie = async (seriesId) => {
        try {
            await axios.delete(`${baseUrl}/series/${seriesId}`,
                {withCredentials: true}
            );

            setSeries((prev) => prev.filter((prevSerie) => prevSerie._id !== seriesId));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ;(async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/series`,
                    {withCredentials: true}
                );

                setSeries(response.data.series);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        setFilteredSeries(series);
    }, [series]);

    return (
        <View>
            <View style={styles.headerWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher une série..."
                    placeholderTextColor="white"
                    value={searchValue}
                    onChangeText={onChangeSearch}
                />
            </View>
            <SeriesModal
                title={"Ajouter une série"}
                visible={createSeriesModalIsOpen}
                onClose={onCloseCreateSerieModal}
                onSave={onCreateSerie}
            />
            <SeriesModal
                title={"Editer une série"}
                series={currentSeries}
                visible={editSeriesModalIsOpen}
                onClose={onCloseEditSerieModal}
                onSave={onEditSerie}
            />
            <FlatList
                data={filteredSeries}
                renderItem={({item}) => <View key={item._id}>
                    {renderSeriesItem({item, onDetailsNavigate})}
                    <View style={styles.seriesFooter}>
                        <Button title={"Editer"} onPress={() => onOpenEditSerieModal(item._id)}/>
                        <Button title={"Supprimer"} onPress={() => onDeleteSerie(item._id)}/>
                    </View>
                </View>
                }
                keyExtractor={({item}) => item?._id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    headerWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "#f1f1f1",
    },
    seriesFooter: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 10,
    },
    input: {
        width: "100%",
        padding: 8,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#f1f1f1",
        paddingHorizontal: 10,
    },
});

