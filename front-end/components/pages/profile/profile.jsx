import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
//import { ScrollView } from "react-native-gesture-handler";
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";
//import { TouchableOpacity } from "react-native-web";

import { useNavigate } from 'react-router-native';



export default function Profile(props) {


  const navigate = useNavigate();
  const details = () => {
    // Code à exécuter lorsque le bouton est pressé.
    navigate('/details');
  }

  /*<TouchableOpacity style={[styles.button, styles.back]} onPress={back}>
    <Text style={styles.textbutton}>&larr; Back</Text>
  </TouchableOpacity>*/
    return (
      <SafeAreaView style={styles.container}>

        <View>
          <Header />
        </View>

        <ScrollView>
          <View>
              <Text style={styles.texteFirst}>Profil</Text>
          </View>

          <View style={styles.row}>
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
          </View>
          <View style={styles.row}>
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
          </View>
          <View style={styles.row}>
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
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
    texteFirst: {
      color: '#f1f1f1',
      textAlign: 'justify',
      fontSize: 34,
      fontWeight: 'bold',
      marginVertical: 34,
      margin: 'auto',
      //textAlignVertical: 'auto',
      textAlign: 'center',
    },
    texteSecond: {
      color: '#f1f1f1',
      textAlign: 'justify',
      marginHorizontal: 'auto',
      fontSize: 21,
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
    viewProfile: {
      backgroundColor: 'transparent',
      color: 'white',
      width: '100%',
      height: 'auto',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    }
});