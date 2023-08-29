import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

//import Swipeout from 'react-native-swipeout';
//import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigate } from 'react-router-native';
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";

export default function Home (props) {
  //title, onDelete, data, setData, item, 
  const navigate = useNavigate();

  const films = () => {
    // Code à exécuter lorsque le bouton est pressé.
    try {
      navigate('/films');
    } catch (error) {
      console.log(error);
    }
  };
  const series = () => {
    // Code à exécuter lorsque le bouton est pressé.
    try {
      navigate('/series');
    } catch (error) {
      console.log(error);
    }
  };

  //tous les films
  const firstFilms = () => {
    try {
      navigate('/details');
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <SafeAreaView style={styles.container}>

      <View>
        <Header />
      </View>

        <ScrollView style={styles.vScrol}>
          <View style={styles.carousel}>
            <Text style={styles.texteFirst}>VOS ANIMES GRATUITEMENT ET SANS PUB.</Text>
              <View>
                <Text style={styles.texteSecond}>Un site fait par un passionné, pour des passionnés.</Text>
                <Text style={styles.texteSecond}>100% gratuit, open source et sans pub.</Text>
                <Text style={styles.texteThird}>Parce que tout le monde n'a pas des centaines d'euros à mettre dans l'intégrale de son animé préféré...</Text>
                <Text style={styles.texteThird}>Mais n'oubliez pas de soutenir les créateurs en achetant les originaux lorsque vous le pouvez!</Text>
              </View>
          </View>

          <View>
            <Text style={[styles.texteSecond, styles.texteCenter]}>Films</Text>
              <View style={styles.zoneImages}>
                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>
              </View>
          </View>

          <View>
            <Text style={[styles.texteSecond, styles.texteCenter]}>Séries</Text>
            <View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={firstFilms}>
                    <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
                  </TouchableOpacity>
                </View>
              </View>
          </View>

          <View>
            <Version />
          </View>
        </ScrollView>

        <View>
          <Footer />
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