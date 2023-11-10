import React, {useRef, useState} from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {Video, ResizeMode} from 'expo-av';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useSeriesContext} from "../../context/seriesContext";

export default function SeriesDetails() {
    const {currentSeries} = useSeriesContext();

    const video = useRef(null);
    const [status, setStatus] = useState({});

    const onPlayVideo = () => {
        try {
            //alert("ERROR");
            //onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            return (
                <>
                    <View>
                        <Video ref={video} style={styles.video}
                               source={{uri: 'https://www.youtube.com/watch?v=yvmcyIPVE3Y',}}
                               useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping
                               onPlaybackStatusUpdate={status => setStatus(() => status)}/>
                    </View>
                </>
            );
        } catch (error) {
            console.log(error);
            console.log("catch lecture.");
        }
    }

    return currentSeries ? (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView>
                    <View>
                        <Image style={styles.images} source={{uri: currentSeries?.logo}}/>
                    </View>

                    <View style={styles.info}>

                        <View style={styles.row}>
                            <Text style={styles.texteTitre}>
                                {currentSeries?.name}
                            </Text>

                            <TouchableOpacity style={styles.button} onPress={onPlayVideo}
                                              title={status.isPlaying ? 'Pause' : 'Play'}>
                                <Text>
                                    Lecture &rarr;
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.distribution}>
                                Distibution :
                            </Text>
                            <Text style={styles.textActor}>
                                Seán Schemmel, Christopher Sabat, Kyle Hebert, Sonny Strait, Kara Edwards, ...
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.description}>
                                Description :
                            </Text>
                            <Text style={styles.texteDescription}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia minus beatae
                                praesentium quidem culpa velit rem numquam? Alias, autem, ipsa cupiditate quo ipsam
                                possimus ab adipisci sunt, sit maxime aspernatur!
                            </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>

            <View>
                <Video ref={video} style={styles.video} source={{uri: 'https://www.youtube.com/watch?v=yvmcyIPVE3Y',}}
                       useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping
                       onPlaybackStatusUpdate={status => setStatus(() => status)}/>
            </View>
        </SafeAreaView>
    ) : <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator/>
    </View>;
}


//Le style de la page.
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: '#f1f1f1',
        flex: 1,
        //textAlign: 'justify',
    },
    loadingContainer: {
        backgroundColor: 'black',
        color: '#f1f1f1',
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    texteFirst: {
        color: '#f1f1f1',
        textAlign: 'justify',
        fontSize: 34,
        fontWeight: 'bold',
        marginVertical: 34,
    },
    texteSecond: {
        color: '#f1f1f1',
        textAlign: 'justify',
        marginHorizontal: 'auto',
        fontSize: 21,
    },
    button: {
        backgroundColor: '#f6f6f6',
        width: 89,
        height: 34,
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginVertical: 21,
        marginHorizontal: 'auto',
    },
    images: {
        width: '100%',
        height: 610,
        marginBottom: 15,
        backgroundColor: 'red',
        borderRadius: 13,
    },
    texteTitre: {
        color: 'red',
        fontSize: 34,
        marginRight: 21,
        width: '72%',
    },

    buttonclose: {
        backgroundColor: '#f1f1ff',
        color: '#123456',
        width: 21,
        height: 21,
        textAlign: 'center',
        margin: 'auto',
        marginHorizontal: 'auto',
    },
    textbutton: {
        color: '#123456',
    },
    textActor: {
        color: '#f1f1f1',
        fontSize: 13,
    },
    texteDescription: {
        color: '#f1f1f1',
        fontSize: 13,
    },
    distribution: {
        color: '#f1f1f1',
        fontSize: 21,
    },
    description: {
        color: '#f1f1f1',
        fontSize: 21,
    },
    info: {
        width: '89%',
        height: 'auto',
        margin: 'auto',
    },
    column: {
        flexDirection: 'column',
        width: '89%',
        height: 55,
    }
});

/*
  <View style={styles.buttons}>
    <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() } />
  </View>
*/
