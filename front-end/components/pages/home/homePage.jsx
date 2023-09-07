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
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
import Films, {renderMovieItem, RenderMovieItem} from "../filmsEtSeries/films";
import Series, {renderSeriesItem, RenderSeriesItem} from "../filmsEtSeries/series";
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";
import {useMoviesContext} from "../../context/moviesContext";

export default function Home(props) {
    const navigate = useNavigate();
    const {onChangeCurrentSeries} = useSeriesContext();
    const {onChangeCurrentMovie} = useMoviesContext();
    const [series, setSeries] = useState([]);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const seriesResponse = await axios.get(
                    "http://localhost:5000/series",
                    {withCredentials: true}
                );

                setSeries(seriesResponse.data.series);

                const moviesResponse = await axios.get(
                    "http://localhost:5000/movies",
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

            <View>
                <Header/>
            </View>

            <ScrollView style={styles.vScrol}>
                <View style={styles.carousel}>
                    <Text style={styles.texteFirst}>VOS ANIMES GRATUITEMENT ET SANS PUB.</Text>
                    <View>
                        <Text style={styles.texteSecond}>Un site fait par un passionné, pour des passionnés.</Text>
                        <Text style={styles.texteSecond}>100% gratuit, open source et sans pub.</Text>
                        <Text style={styles.texteThird}>Parce que tout le monde n'a pas des centaines d'euros à mettre
                            dans l'intégrale de son animé préféré...</Text>
                        <Text style={styles.texteThird}>Mais n'oubliez pas de soutenir les créateurs en achetant les
                            originaux lorsque vous le pouvez!</Text>
                    </View>
                </View>

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

                <FlatList
                    data={series}
                    renderItem={({item}) =>
                        renderSeriesItem({
                            item,
                            onDetailsNavigate: onSeriesDetailsNavigate,
                            width: '50%',
                        })}
                    keyExtractor={(movie) => movie.id}
                    numColumns={2}
                />


                <View>
                    <Version/>
                </View>
            </ScrollView>

            <View>
                <Footer/>
            </View>

        </SafeAreaView>
    );
}


//Le style de la page.
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: '#f1f1f1',
        flex: 1,
        //textAlign: 'justify',
    },
    carousel: {
        width: '100%',
        height: 'auto',
        borderRadius: 21,
    },
    texteFirst: {
        color: '#f1f1f1',
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        marginVertical: 34,
        margin: 'auto',
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