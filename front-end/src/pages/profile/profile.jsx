import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

//import Swipeout from 'react-native-swipeout';
//import { SwipeListView } from 'react-native-swipe-list-view';
import {useNavigate} from 'react-router-native';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Version from "../../components/version/version";
import Films, {renderMovieItem, RenderMovieItem} from "../filmsEtSeries/films";
import Series, {renderSeriesItem, RenderSeriesItem} from "../filmsEtSeries/series";
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";
import {useMoviesContext} from "../../context/moviesContext";
import {baseUrl} from "../../config";

export default function Profile (props) {
    const navigate = useNavigate();
    const {onChangeCurrentSeries} = useSeriesContext();
    const {onChangeCurrentMovie} = useMoviesContext();
    const [series, setSeries] = useState([]);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const seriesResponse = await axios.get(
                    `${baseUrl}/series`,
                    {withCredentials: true}
                );

                setSeries(seriesResponse.data.series);

                const moviesResponse = await axios.get(
                    `${baseUrl}/movies`,
                    {withCredentials: true}
                );
                setMovies(moviesResponse.data.movies);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const onMovieDetailsNavigate = (movie) => {
        try {
            onChangeCurrentMovie(movie);
            navigate("/movie-details");
        } catch (error) {
            console.log(error);
        }
    };


    const onSeriesDetailsNavigate = (serie) => {
        try {
            onChangeCurrentSeries(serie);
            navigate("/series-details");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.vScrol}>
                <Text style={styles.texteSecond}>Films</Text>
                    <FlatList
                        data={movies}
                        renderItem={({item}) =>
                            renderMovieItem({
                                item,
                                onDetailsNavigate: onMovieDetailsNavigate,
                                width: '50%',
                            })}
                        keyExtractor={(movie) => movie.id}
                        numColumns={2}
                    />

                <Text style={styles.texteSecond}>Séries</Text>
                    <FlatList
                        data={series}
                        renderItem={({item}) =>
                            renderSeriesItem({
                                item,
                                onDetailsNavigate: onSeriesDetailsNavigate,
                                width: '50%',
                            })}
                        keyExtractor={(serie) => serie.id}
                        numColumns={2}
                    />
            </ScrollView>
        </SafeAreaView>
    );
}


//Le style de la page.
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: '#f1f1f1',
        flex: 1,
    },
    texteSecond: {
        color: '#f1f1f1',
        textAlign: 'center',
        marginHorizontal: 'auto',
        fontSize: 21,
    },
    texteThird: {
        color: '#f1f1f1',
        textAlign: 'center',
        marginHorizontal: 'auto',
        fontSize: 13,
    },
    button: {
        backgroundColor: '#f6f6f6',
        color: '#f1f1f1',
        marginVertical: 21,
    },
    images: {
        width: 144,
        height: 233,
        margin: 15,
        backgroundColor: 'red',
        borderRadius: 13,
    },
    vScrol: {
        width: '100%',
        height: 'auto',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    texteCenter: {
        color: 'white',
        textAlign: 'center',
    },
});
