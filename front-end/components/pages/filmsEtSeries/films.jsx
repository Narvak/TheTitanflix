import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import {useNavigate} from "react-router-native";
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
import axios from "axios";

export default function Films(props) {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/movies",
                    {withCredentials: true}
                );
                setMovies(response.data.movies);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const back = () => {
        try {
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const details = (movie) => {
        try {
            navigate("/details");
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({item: movie}) => (
        <TouchableOpacity onPress={() => details(movie)}>
            <View style={styles.movieWrapper}>
                <Text style={styles.texteSecond}>{movie?.name}</Text>
                <Image style={styles.images} source={{
                    uri: movie?.logo,
                }}/>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header/>

            <Text style={styles.texteSecond}>Films</Text>

            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(movie) => movie.id}
            />

            <TouchableOpacity onPress={back}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Version/>

            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    texteSecond: {
        color: "#f1f1f1",
        textAlign: "center",
        marginHorizontal: "auto",
        fontSize: 21,
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
