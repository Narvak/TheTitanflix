import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
} from "react-native";
import {useNavigate} from "react-router-native";
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";


export default function GestionPage() {
    const navigate = useNavigate();
    const {onChangeCurrentSeries} = useSeriesContext();
    const [series, setSeries] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/series",
                    {withCredentials: true}
                );

                setSeries(response.data.series);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header/>

            <Text style={styles.texteSecond}>Gestion</Text>

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
    seriesWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
});
