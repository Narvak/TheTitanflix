import React, {useState} from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigate } from 'react-router-native';
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import Version from "../../UI/version/version";


export default function Films (props) {

  const navigate = useNavigate();
  const back = () => {
      // Code à exécuter lorsque le bouton est pressé.
      try {
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
  };

  const details = () => {
    try {
      navigate("/details")
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>

        <ScrollView>
          <View>
            <TouchableOpacity onPress={back}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.texteSecond}>Films</Text>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={details}>
              <Image style={styles.images} source={require('../../media/footer/ico-home.png')} />
            </TouchableOpacity>
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
    texteSecond: {
      color: '#f1f1f1',
      textAlign: 'center',
      marginHorizontal: 'auto',
      fontSize: 21,

    },
    separator: {
      marginVertical: 13,
      borderColor: '#f1f1f1',
      borderBottomWidth: StyleSheet.hairlineWidth,
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
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    },
});