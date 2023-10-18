import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View, Modal, Alert, Pressable, TextInput, FlatList} from "react-native";
import axios from "axios";
import {baseUrl} from "../../config";
import {MovieModal} from "../modals/movieModal";
import {renderMovieItem} from "../../pages/filmsEtSeries/films";

export const ManageMovies = () => {
    const [createMovieModalIsOpen, setCreateMovieModalIsOpen] = useState(false);
    const [editMovieModalIsOpen, setEditMovieModalIsOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const onOpenCreateMovieModal = () => setCreateMovieModalIsOpen(true);

    const onCloseCreateMovieModal = () => setCreateMovieModalIsOpen(false);

    const onOpenEditMovieModal = (movieId) => {
        const movie = movies.find((movie) => movie._id === movieId);

        setCurrentMovie(movie);

        setEditMovieModalIsOpen(true);
    }

    const onCloseEditMovieModal = () => setEditMovieModalIsOpen(false);

    const onDetailsNavigate = (movie) => {
    };

    const onChangeSearch = (text) => {
        setSearchValue(text);

        if (text === "") {
            setFilteredMovies(movies);
        }

        setFilteredMovies(movies.filter((movie) => {
            return movie.name.toLowerCase().includes(text.toLowerCase());
        }));
    }

    const onCreateMovie = async (movie) => {
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

        onCloseCreateMovieModal();
    };

    const onEditMovie = async (movie) => {
        try {
            const result = await axios.patch(`${baseUrl}/movies/${currentMovie._id}`,
                movie,
                {withCredentials: true}
            );

            setMovies((prev) => prev.map((prevMovie) => {
                if (prevMovie._id === currentMovie._id) {
                    return result.data.movieUpdated;
                }

                return prevMovie;
            }));
        } catch (error) {
            console.log(error);
        }

        onCloseEditMovieModal();
    }

    const onDeleteMovie = async (movieId) => {
        try {
            await axios.delete(`${baseUrl}/movies/${movieId}`,
                {withCredentials: true}
            );

            setMovies((prev) => prev.filter((prevMovie) => prevMovie._id !== movieId));
        } catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    return (
        <View>
            <View style={styles.headerWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher un film..."
                    placeholderTextColor="white"
                    value={searchValue}
                    onChangeText={onChangeSearch}
                />
                <Button style={styles.button} onPress={onOpenCreateMovieModal} title="Ajouter un film"/>
            </View>
            <MovieModal
                title={"Ajouter un film"}
                visible={createMovieModalIsOpen}
                onClose={onCloseCreateMovieModal}
                onSave={onCreateMovie}
            />
            <MovieModal
                title={"Editer un film"}
                movie={currentMovie}
                visible={editMovieModalIsOpen}
                onClose={onCloseEditMovieModal}
                onSave={onEditMovie}
            />
            <FlatList
                data={filteredMovies}
                renderItem={({item}) => <View key={item._id}>
                    {renderMovieItem({item, onDetailsNavigate})}
                    <View style={styles.movieFooter}>
                        <Button title={"Editer"} onPress={() => onOpenEditMovieModal(item._id)}/>
                        <Button title={"Supprimer"} onPress={() => onDeleteMovie(item._id)}/>
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
    movieFooter: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 10,
    },
    input: {
        width: "70%",
        padding: 8,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#f1f1f1",
        paddingHorizontal: 10,
    },
});

