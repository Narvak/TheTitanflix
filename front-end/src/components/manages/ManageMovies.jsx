import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View, Modal, Alert, Pressable, TextInput, FlatList} from "react-native";
import axios from "axios";
import {baseUrl} from "../../config";
import {MovieModal} from "../modals/movieModal";
import {renderMovieItem} from "../../pages/filmsEtSeries/films";

export const ManageMovies = () => {
    const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
    const [movies, setMovies] = useState([])

    const onOpenModal = () => setMovieModalIsOpen(true);

    const onCloseModal = () => setMovieModalIsOpen(false);

    const onDetailsNavigate = (movie) => {
    };

    const onSaveMovie = async (movie) => {
        try {
            const {name, description, image, time} = movie;

            if (!name || !description || !image || !time) {
                return console.log("null or undefined");
            }

            const newMovie = await axios.post(`${baseUrl}/movies`,
                movie,
                {withCredentials: true}
            );
        } catch (error) {
            console.log(error);
        }

        onCloseModal();
    };

    useEffect(() => {
        ;(async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/movies`,
                    {withCredentials: true}
                );

                setMovies(response.data.movies);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <View>
            <View style={styles.headerWrapper}>
                <Text style={styles.text}>
                    Search Movie
                </Text>
                <Button style={styles.button} onPress={onOpenModal} title="Ajouter un film"/>
            </View>
            <MovieModal
                visible={movieModalIsOpen}
                onClose={onCloseModal}
                onSave={onSaveMovie}
            />
            <FlatList
                data={movies}
                renderItem={({item}) => <>
                    {renderMovieItem({item, onDetailsNavigate})}
                    <View style={styles.movieFooter}>
                        <Button title={"Editer"}/>
                        <Button title={"Supprimer"}/>
                    </View>
                </>
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
    },
    text: {
        color: "#f1f1f1",
    },
    movieFooter: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 10,
    }
});

