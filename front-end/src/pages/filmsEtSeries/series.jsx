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
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Version from "../../components/version/version";
import axios from "axios";
import {useSeriesContext} from "../../context/seriesContext";
import {baseUrl} from "../../config";

export const renderSeriesItem = ({item, onDetailsNavigate, width}) => {
    return (
        <View style={{...styles.seriesWrapper, width: width && width }} key={`series : ${item?._id}`}>
            <TouchableOpacity onPress={() => onDetailsNavigate(item)}>
                <View style={styles.seriesWrapper}>
                    <Text style={styles.texteSecond}>{item?.name}</Text>
                    <Image style={styles.images} source={{
                        uri: item?.logo,
                    }}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default function Series() {
    const navigate = useNavigate();
    const {onChangeCurrentSeries} = useSeriesContext();
    const [series, setSeries] = useState([]);

    useEffect(() => {
        (async () => {
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

    const onHomeNavigate = () => {
        try {
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const onDetailsNavigate = (serie) => {
        try {
            onChangeCurrentSeries(serie);
            navigate("/series-details");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texteSecond}>Séries</Text>

            <FlatList
                data={series}
                renderItem={({item}) => renderSeriesItem({item, onDetailsNavigate})}
                keyExtractor={({item}) => item?._id}
            />
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
