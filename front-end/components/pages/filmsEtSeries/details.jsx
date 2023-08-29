import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Navigate } from "react-router-native";
import { Video, ResizeMode } from 'expo-av';
import { useNavigate } from 'react-router-native';
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";

export default function Details (props) {
  const navigate = useNavigate();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

    /*const titre = () => {
        let data = null;
        let images = null;
        //la variable data contien le nom du film ou de la serie en react-native?

        if (data == null || data === null) {
            console.log('error no data')
        } else if (data != null) {
            console.log(data)
            return (
                <Text>
                    ${data}
                </Text>
            )
        } else {
            console.log('data ok')
        }
    }*/

    
    const close = () => {
      // Code à exécuter lorsque le bouton est pressé.
      try {
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
    };
    const films = () => {
      try {
        navigate('/films');
      } catch (error) {
        console.log(error);
      }
    };
    const series = () => {
      try {
        navigate('/series');
      } catch (error) {
        console.log(error);
      }
    };

    const lecture = () => {
      try {
        //alert("ERROR");
        //onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          return (
            <>
              <View>
                <Video ref={video} style={styles.video} source={{ uri: 'https://www.youtube.com/watch?v=yvmcyIPVE3Y', }}
                  useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
              </View>
            </>
          );
      } catch (error) {
        console.log(error);
        console.log("catch lecture.");
      }
    }

    return (
      <SafeAreaView style={styles.container}>
          <View>
            <View>
              <Header />
            </View>

              <ScrollView>
                <View>
                  <View>
                    <Image style={styles.images} source={{uri: '../../media/films/images.png',}} />
                  </View>
                  
                  <View style={styles.info}>

                    <View style={styles.row}>
                      <Text style={styles.texteTitre}>
                        Broly le super guerrier
                      </Text>

                      <TouchableOpacity style={styles.button} onPress={lecture} title={status.isPlaying ? 'Pause' : 'Play'} >
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
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia minus beatae praesentium quidem culpa velit rem numquam? Alias, autem, ipsa cupiditate quo ipsam possimus ab adipisci sunt, sit maxime aspernatur!
                        </Text>
                      </View>

                    </View>
                </View>
              </ScrollView>
              <View>
                <Footer />
              </View>
          </View>

          <View>
            <Video ref={video} style={styles.video} source={{ uri: 'https://www.youtube.com/watch?v=yvmcyIPVE3Y', }}
              useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping onPlaybackStatusUpdate={status => setStatus(() => status)} />
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