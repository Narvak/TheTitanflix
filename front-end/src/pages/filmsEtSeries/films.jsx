import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import {useNavigate} from "react-router-native";
import Version from "../../components/version/version";
import axios from "axios";
import {useMoviesContext} from "../../context/moviesContext";
import {baseUrl} from "../../config";

export const renderMovieItem = ({item, onDetailsNavigate, width}) => {
    return (
        <View style={{...styles.movieWrapper, width: width && width }} key={`movie : ${item?._id}`}>
            <TouchableOpacity onPress={() => onDetailsNavigate(item)}>
                <View style={styles.movieWrapper}>
                    <Text style={styles.texteSecond}>{item?.name}</Text>
                    <Image style={styles.images} source={{
                        uri: item?.image,
                    }}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default function Films() {
    const navigate = useNavigate();
    const {onChangeCurrentMovie} = useMoviesContext();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
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

    const onDetailsNavigate = (movie) => {
        try {
            onChangeCurrentMovie(movie);
            navigate("/movie-details");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texteSecond}>Films</Text>

            <FlatList
                data={movies}
                renderItem={({item}) => renderMovieItem({item, onDetailsNavigate})}
                keyExtractor={({item}) => item?._id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texteSecond: {
        color: "#f1f1f1",
        textAlign: "center",
        marginHorizontal: "auto",
        fontSize: 16,
        marginVertical: 10,
    },
    images: {
        width: 144,
        height: 233,
        borderRadius: 13,
    },
    movieWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
});
